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
       public profile_path: string,
       public known_for: KnownFor[],
    ){}
}

export class PeopleResponse{
    constructor(
        public page: number,
        public results: Person[] ,
        public total_results: number
    ){}
}
export class KnownFor{
    constructor(
        public poster_path: string,
        public adult: boolean,
        public overview: string,
        public release_date: string,
        public original_title: string,
        public genre_ids: number[],
        public id: number,
        public media_type: string,
        public original_language: string,
        public title: string,
        public backdrop_path: string,
        public popularity: number,
        public vote_count: number,
        public video: boolean,
        public vote_average: number){}
}