export class Reviews {
    constructor(
      public  author: string, 
      public author_details: {
        avatar_path: string,
        name: string,
        rating: number,
        username: string
       },
      public content: string,
      public created_at: string, 
      public id: string, 
      public updated_at: string,
      public url: string
    ){}
}