export class Videos{
    constructor(
       public id: string,
       public iso_639_1: string,
       public iso_3166_1: string,
       public key: string,
       public name: string,
       public official: boolean,
       public published_at: string,
       public site: string,
       public size: number,
       public type: string,
    ){}
}

export class VideoResponse{
    constructor(
        public id : number,
        public results : Videos[]
    ){}
}