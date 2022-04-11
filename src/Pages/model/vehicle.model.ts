import { IFilm } from './film.model';
import { ICharacter } from './character.model';
export interface IVehicle {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed:number,
    crew: number,
    passengers: number,
    cargo_capacity: number,
    consumables: string,
    vehicle_class: string,
    pilots: ICharacter[],
    films: IFilm[],
    created: Date,
    edited: Date,
    url: string
}