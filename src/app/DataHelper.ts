export class DataHelper {
    
    // mappes list of gsenres from one API call to a call that provides the movies
    // and returns an array with genres 
    public static MapGenres(movieObject: any, genresArray: any):[]{
      return movieObject.map((genreFromMovie:any)=> 
              genresArray.filter((allGenres:any) => genreFromMovie == allGenres.id))
                        .map((gerne: any) => gerne[0].name).slice(0,2); 
    
     }

    public static MapJob(JobArray:any) {
      if(JobArray.length <= 3 ) return JobArray;

      let returnArray = [];
      returnArray.push(JobArray.filter((x:any)=>x.job == "Director")[0]);
      
      let producer = returnArray.push(JobArray.filter((x:any)=>x.job == "Executive Producer")[0]);
      if(!producer) returnArray.push(JobArray.filter((x:any)=>x.job == "Producer")[0]);

      returnArray.push(JobArray.filter((x:any)=>x.job == "Screenplay")[0]);
      returnArray.push(JobArray.filter((x:any)=>x.job == "Animation")[0]);
      returnArray.push(JobArray.filter((x:any)=>x.job == "Writer")[0]);
      returnArray.push(JobArray.filter((x:any)=>x.job == "Art Direction")[0]);
      returnArray.push(JobArray.filter((x:any)=>x.job == "Special Effects")[0]);
      returnArray.push(JobArray.filter((x:any)=>x.job == "Visual Effects")[0]);
      returnArray.push(JobArray.filter((x:any)=>x.job == "Music Arranger")[0]);
      returnArray = returnArray.filter((x:any)=> x != undefined);
      
      if(JobArray.length > 3 )return returnArray.slice(0,3);
      
      returnArray.push(JobArray.slice(0,));
      return returnArray.slice(0,3);
    };

    public static FindDirector(crewArray:any){
      return crewArray.filter((x:any)=> x.job == "Director")[0];
    } 

    public static AlsoDirected(arr:any, sourceId: any){
      let returnArray = arr.filter((x:any)=> x.job == "Director" && x.id != sourceId).sort((x:any, y:any)=> x.vote_count - y.vote_count);
      
      if(returnArray < 2)
      return returnArray;
      
      return returnArray.slice(( returnArray.length -2) , returnArray.length);
    }
    public static MostPopularPeople(peopleArray:any){
     return peopleArray.filter((value:any, i:any, self:any)=> self.indexOf(value) === i)
                        .sort((x:any, y:any)=> x.popularity - y.popularity)
                        .splice(peopleArray.length - 6, peopleArray.length)
                        .sort((x:any, y:any)=> y.popularity - x.popularity);
    }
    public static MostPopularRecomendations(recomendationsArray: any, sourceId: any){
      return recomendationsArray.filter((i:any)=> i.id != sourceId).sort((x:any, y:any)=> y.popularity - x.popularity).splice(0, 6);
    }

    public static FormatNumber(number: string){
      if(!number) return null;
      
      let returnNumber = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',  currencyDisplay: 'narrowSymbol' })
      .format(parseInt(number));

      if (returnNumber.length >= 12) return returnNumber.slice(0, returnNumber.length -11);
      
      return returnNumber.slice(0, returnNumber.length -3)
    }

    public static FormatDate(date: string){
     if(!date) return null;
  
      return new Intl.DateTimeFormat('en-US', {month: "short", day: "numeric", year: "numeric" } )
              .format(new Date(date));
    }


}
     
