import { Person } from 'src/app/models/Person';
import { PeopleDataService } from './../people-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataHelper } from 'src/app/DataHelper';

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent implements OnInit {
  posterPath!: string;
  data!: Person;
  birthday!: string;
  deathday!: string;
  biography!: string;
  imdb!: string;
  constructor(private peopleDataservice: PeopleDataService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((id:any)=> {
            this.peopleDataservice.get('person',id.params.id).subscribe((res:Person) => {
              this.posterPath = res.profile_path;
              this.imdb = `https://www.imdb.com/name/${res.imdb_id}/?ref_=tt_ov_dr`;
              this.data = res;
              this.birthday = DataHelper.FormatDate(res.birthday);
              this.deathday = DataHelper.FormatDate(res.deathday);
              this.biography = DataHelper.FormatString(res.biography);
            })

    })
  }
}
