import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../services/user.service";
import { Jobs } from './../../jobs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  Jobs: Jobs[]= []
  searchValue: any


  constructor(private userService: UserService) { } //npm i ng2-search-filter

  ngOnInit(): void {
  //   this.userService.getJob().subscribe((response : any) => {
  //     this.Jobs = <any>response;
  //   });
  // }
  }

}
