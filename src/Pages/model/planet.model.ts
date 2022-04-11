import { ICharacter } from './character.model';
import { IFilm } from './film.model';
export interface IPlanet {
    name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: number,
    population: number,
    residents: ICharacter[],
    films: IFilm[],
    created: Date,
    edited: Date,
    url: string
}