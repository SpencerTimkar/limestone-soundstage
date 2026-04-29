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
        id: 6,
        date: "MAY 8",
        venue: "The Bottleneck",
        city: "Lawrence, KS",
        details: "w/ The Whips + The Barefoot Cult",
        time: "",
        ticketLink: "#",
    },
];
