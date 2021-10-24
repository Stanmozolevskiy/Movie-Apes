export class Crew{
    constructor(
       public adult: boolean,
       public credis_id: number,
       public department: string,
       public gender: number,
       public id: number,
       public job: string,
       public known_for_department: string,
       public name: string,
       public original_name: string,
       public popularity: number,
       public profile_path: boolean,
       public vote_count: number
    ){}
}