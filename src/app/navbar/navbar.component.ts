import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
query!:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(e:any){
    this.query = e;
    this.router.navigateByUrl(this.query);
    this.query = '';
    return false;
  }

}
