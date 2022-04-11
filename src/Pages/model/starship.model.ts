import { IFilm } from './film.model';
import { ICharacter } from './character.model';

export interface IStartship {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: number,
    crew: number,
    passengers: number,
    cargo_capacity: number,
    consumables: string,
    hyperdrive_rating: bigint,
    MGLT: number,
    starship_class: string,
    pilots: ICharacter[],
    films: IFilm[],
    created: Date,
    edited: Date,
    url: string
}