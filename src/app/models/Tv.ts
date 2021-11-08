import { Genres } from './Genres';
export class Tv{
    constructor(
        public  backdrop_path: string, 
        public first_air_date: string, 
        public genre_ids: Genres[],
        public id: number, 
        public name: string, 
        public origin_country: string[],
        public original_language: "en",
        public original_name: "Chucky",
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public vote_average: number,
        public vote_count: number
    ){}
}