import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jchangepassword',
  templateUrl: './jchangepassword.component.html',
  styleUrls: ['./jchangepassword.component.css']
})
export class JchangepasswordComponent implements OnInit {

  old_password:any
  new_password:any
  confirm_new_password:any
  
  constructor() { }

  ngOnInit(): void {
  }

}
