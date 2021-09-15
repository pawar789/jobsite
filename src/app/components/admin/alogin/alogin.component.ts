import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  email_id:any
  pass_word:any

  constructor() { }

  login = () =>{
    let obj={ email_id : this.email_id, pass_word: this.pass_word}
    console.log(obj);
  }
  // constructor() { }

  ngOnInit(): void {
  }

}
