import type { Place } from '../../backend/src/types';

export type PlacesProps = {
    places: Place[];
};

export interface NewPlace {
    UserID: number;
    Name: string;
    Latitude: number;
    Longitude: number;
}


