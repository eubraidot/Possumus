import { ICharacter } from './character.model';
import { IStartship } from './starship.model';
import { IVehicle } from './vehicle.model';
import { ISpecie } from './specie.model';
import { IPlanet } from './planet.model';
export interface IFilm {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: Date,
    characters: ICharacter[],
    planets: IPlanet[],
    starships: IStartship[],
    vehicles: IVehicle[],
    species: ISpecie[],
    created: Date,
    edited: Date,
    url: string
}