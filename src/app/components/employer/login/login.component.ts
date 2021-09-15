import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id:any
  pass_word:any

  constructor() { }

  login = () =>{
    let obj={ email_id : this.email_id, pass_word: this.pass_word}
    console.log(obj);
  }

  ngOnInit(): void {
  }

}
