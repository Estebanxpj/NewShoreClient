import { IFlight } from "./flight.interface";

export interface IJourney {
    origin: string;
    destination: string;
    flights: IFlight[];
    price: number;
}