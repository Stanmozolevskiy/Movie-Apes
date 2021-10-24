import { Cast } from './Cast';
import { Crew } from './Crew';
export class AlsoDirected{
    constructor(
     public crew: Crew[],
     public cast: Cast[]
    ){}
}