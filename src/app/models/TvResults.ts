import { Tv } from './Tv';

export class TvResults {
    constructor(
        public page: number,
        public results: Tv[]
    ) {
        
    }
}