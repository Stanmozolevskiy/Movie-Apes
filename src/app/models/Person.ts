import { Crew } from 'src/app/models/Crew';
import { Cast } from './Cast';
export class Person{
    constructor(
       public adult: boolean,
       public also_known_as: [],
       public biography: string,
       public birthday: boolean,
       public credits: {cast: Cast[], crew: Crew[]},
       public deathday: boolean,
       public gender: number,
       public homepage: boolean,
       public id: number,
       public imdb_id: string,
       public known_for_department: string,
       public name: string,
       public place_of_birth: boolean,
       public popularity: number,
       public profile_path: boolean
    ){}
}