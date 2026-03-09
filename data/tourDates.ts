export interface TourDate {
    id: number;
    date: string;
    venue: string;
    city: string;
    details?: string;
    time?: string;
    age?: string;
    cover?: string;
    ticketLink?: string;
}

export const tourDates: TourDate[] = [
    {
        id: 3,
        date: "MAR 28",
        venue: "ECM 2nd Floor @ KU",
        city: "Lawrence, KS",
        details: "w/ The Barefoot Cult",
        time: "8:00 PM",
        ticketLink: "#",
    },
    {
        id: 4,
        date: "APR 9",
        venue: "KJHK 90.7 FM",
        city: "Lawrence, KS",
        details: "Live Radio Show",
        time: "",
        ticketLink: "#",
    },
    {
        id: 5,
        date: "APR 11",
        venue: "Chess Boxing",
        city: "Lawrence, KS",
        details: "w/ The Barefoot Cult",
        time: "6:00 PM",
        ticketLink: "#",
    },
    {
        id: 6,
        date: "MAY 8",
        venue: "The Bottleneck",
        city: "Lawrence, KS",
        details: "w/ The Whips + The Barefoot Cult",
        time: "",
        ticketLink: "#",
    },
];
