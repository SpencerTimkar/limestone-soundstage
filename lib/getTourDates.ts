import { tourDates as fallbackTourDates, type TourDate } from "@/data/tourDates";

const DEFAULT_SHOWS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQS3Jm5tXTsvidh1I2NWoy6IoxcVnnNdKqwSL3UDZpD0FeAL1mu5ID5mByt7KzQfqRUViCZe4sdAnPT/pub?gid=2098727735&single=true&output=csv";

const SHOWS_CSV_URL = process.env.SHOWS_CSV_URL ?? DEFAULT_SHOWS_CSV_URL;
const SHOWS_TIME_ZONE = process.env.SHOWS_TIME_ZONE ?? "America/Chicago";

function dateInTimeZone(date: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((value) => value.type === type)?.value ?? "";

  return `${part("year")}-${part("month")}-${part("day")}`;
}

function removePastShows(tourDates: TourDate[]): TourDate[] {
  const today = dateInTimeZone(new Date(), SHOWS_TIME_ZONE);

  return tourDates.filter(
    (show) => /^\d{4}-\d{2}-\d{2}$/.test(show.sortDate) && show.sortDate >= today,
  );
}

function parseCsv(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];

    if (character === '"') {
      if (quoted && csv[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && csv[index + 1] === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      value = "";
    } else {
      value += character;
    }
  }

  row.push(value);
  if (row.some((cell) => cell.length > 0)) rows.push(row);

  return rows;
}

function csvToTourDates(csv: string): TourDate[] {
  const [headerRow, ...dataRows] = parseCsv(csv);
  if (!headerRow) throw new Error("The shows sheet is empty.");

  const headers = headerRow.map((header) => header.replace(/^\uFEFF/, "").trim());
  const requiredHeaders = ["sortDate", "displayDate", "venue", "city", "visible"];

  if (!requiredHeaders.every((header) => headers.includes(header))) {
    throw new Error("The shows sheet columns do not match the expected format.");
  }

  return dataRows
    .map((cells, index) => {
      const values = Object.fromEntries(
        headers.map((header, columnIndex) => [header, cells[columnIndex]?.trim() ?? ""]),
      );

      return {
        id: `${values.sortDate}-${values.venue}-${index}`,
        sortDate: values.sortDate,
        date: values.displayDate,
        venue: values.venue,
        city: values.city,
        time: values.time || undefined,
        details: values.details || undefined,
        age: values.age || undefined,
        cover: values.cover || undefined,
        ticketLink: values.ticketLink || undefined,
        visible: /^(true|yes|1)$/i.test(values.visible),
      } satisfies TourDate;
    })
    .filter((show) => show.visible && show.date && show.venue && show.city)
    .sort((first, second) => first.sortDate.localeCompare(second.sortDate));
}

export async function getTourDates(): Promise<TourDate[]> {
  try {
    const response = await fetch(SHOWS_CSV_URL, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Google Sheets returned ${response.status}.`);
    }

    return removePastShows(csvToTourDates(await response.text()));
  } catch (error) {
    console.error("Unable to load shows from Google Sheets; using local fallback.", error);
    return removePastShows(fallbackTourDates);
  }
}
