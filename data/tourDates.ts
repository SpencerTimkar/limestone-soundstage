export interface TourDate {
    id: number | string;
    sortDate: string;
    date: string;
    venue: string;
    city: string;
    details?: string;
    time?: string;
    age?: string;
    cover?: string;
    ticketLink?: string;
    visible?: boolean;
}

export const tourDates: TourDate[] = [
];
