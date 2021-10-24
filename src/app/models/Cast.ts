export class Cast{
    constructor(
       public adult: boolean,
       public cast_id: number,
       public character: string,
       public credit_id: string,
       public gender: number,
       public id: number,
       public known_for_department: string,
       public name: string,
       public order: number,
       public original_name: string,
       public popularity: number,
       public profile_path: string,
       public vote_count: number
    ){}
}