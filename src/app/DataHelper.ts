import { Movie } from './models/Movie';
import { Crew } from "./models/Crew";

export class DataHelper {
    
    // mappes list of gsenres from one API call to a call that provides the movies
    // and returns an array with genres 
    public static MapGenres(movieObject: any, genresArray: any):[]{
      return movieObject.map((genreFromMovie:any)=> 
              genresArray.filter((allGenres:any) => genreFromMovie == allGenres.id))
                        .map((gerne: any) => gerne[0].name).slice(0,2); 
    
     }

    public static MapJob(JobArray:Crew[]) {
      if(JobArray.length <= 3 ) return JobArray;
      let returnArray: Crew[] = [];
      returnArray.push(JobArray.filter((x:Crew)=>x.job == "Director")[0]);
      let producer = JobArray.filter((x:Crew)=>x.job == "Executive Producer")[0];
      returnArray.push(producer);
      if(!producer) returnArray.push(JobArray.filter((x:Crew)=>x.job == "Producer")[0]);
      
      returnArray.push(JobArray.filter((x:Crew)=>x.job == "Screenplay")[0]);
      returnArray.push(JobArray.filter((x:Crew)=>x.job == "Animation")[0]);
      returnArray.push(JobArray.filter((x:Crew)=>x.job == "Writer")[0]);
      returnArray.push(JobArray.filter((x:Crew)=>x.job == "Art Direction")[0]);
      returnArray.push(JobArray.filter((x:Crew)=>x.job == "Special Effects")[0]);
      returnArray.push(JobArray.filter((x:Crew)=>x.job == "Visual Effects")[0]);
      returnArray.push(JobArray.filter((x:Crew)=>x.job == "Music Arranger")[0]);
      returnArray = returnArray.filter((x:Crew)=> x != undefined);
      
      if(JobArray.length > 3 )return returnArray.slice(0,3);
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
    public static MostPopularRecomendations(recomendationsArray:any[], sourceId: number){
      return recomendationsArray.filter((i:any)=> i.id != sourceId).sort((x:any, y:any)=> y.popularity - x.popularity).splice(0, 6);
    }
    public static MostPopularNowPlaying(dataArray: any){
      var mostPopular = dataArray.sort((x:any, y:any)=> y.vote_count - x.vote_count).slice(0,5)
      return mostPopular.sort((x:any, y:any)=>  (y.release_date > x.release_date)? 1 : (( x.release_date >  y.release_date)? -1:0 ));
    }

    public static FormatNumber(number: number){
      if(!number) return 'unknown';
      let stringNumber =  number.toString();
      let returnNumber = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',  currencyDisplay: 'narrowSymbol' })
      .format(parseInt(stringNumber));

      if (returnNumber.length >= 12) return returnNumber.slice(0, returnNumber.length -11);
      
      return returnNumber.slice(0, returnNumber.length -3)
    }

    public static FormatDate(date: string){
     if(!date) return date;
  
      return new Intl.DateTimeFormat('en-US', {month: "short", day: "numeric", year: "numeric" } )
              .format(new Date(date));
    }
    
    public static FindMainTrailers(data: any){
      let sortedArray = data.sort((x:any, y:any)=> (x.type < y.type)? 1 :((y.type < x.type) ? -1 : 0 ));
        return sortedArray.length <= 4 ?  sortedArray : sortedArray.splice(0, 4)
    }


}
     
