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
        id: 1,
        date: "AUG 29",
        venue: "9th Street Block Party",
        city: "Lawrence, KS",
    },
    {
        id: 2,
        date: "SEP 11",
        venue: "Pike House",
        city: "Lawrence, KS",
        details: "Mizzou Tailgate",
    },
    {
        id: 3,
        date: "OCT 3",
        venue: "Westport Bowery",
        city: "Kansas City, MO",
        details: "Rapture Presents: Midwest Madness Tour",
    },
];
