import { IFilm } from './film.model';
import { ISpecie } from './specie.model';
import { IVehicle } from './vehicle.model';
import { IStartship } from './starship.model';
export interface ICharacter {
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films?: IFilm[],
    species?: ISpecie[],
    vehicles?: IVehicle[],
    starships?: IStartship[],
    created: string,
    edited: string,
    url: string
}
