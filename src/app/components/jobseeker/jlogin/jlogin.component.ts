import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import {first} from "rxjs/operators";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jlogin',
  templateUrl: './jlogin.component.html',
  styleUrls: ['./jlogin.component.css']
})
export class JloginComponent implements OnInit {

  emailid:any
  password:any
  error_message: any;
  constructor(private router: Router, private userService: UserService, public commonService: CommonService) { }

  ngOnInit(): void {
  }

  emplogin = () => {
    // alert("emplogin()")
    //var body = "id=" + this.id 
    var body = "&emailid=" + this.emailid 
        + "&password=" + this.password;
    // let result = {}

    this.userService.checkValidUser(body)
      .subscribe( (data: string) => {
        console.log('Login Result / JWT Token :')
        console.log(data)
        if(data !== 'Login Failed') {// Login Successful, Got JWT Token
          //localStorage.setItem('loggedin', 'yes');
          // this.commonService.setJwtToken(data);// Store the Token in to CommonService
          // this.commonService.setLoginStatus(1);


          const result = JSON.parse(data)
          this.commonService.setLoginStatus(1);
          this.commonService.set_id(result['_id']);
          this.commonService.setusername(result['username']);
          this.commonService.setemailid(result['emailid']);
          this.commonService.setpassword(result['password']);
          // this.commonService.setmobileno(result['mobileno']);
          // this.commonService.setbirthdate(result['birthdate']);
          // this.commonService.setgender(result['gender']);
          // this.commonService.setphoto(result['photo']);
          this.commonService.setJwtToken(result['jwtToken']);

          localStorage.setItem('jwtToken', result['jwtToken']);  
          localStorage.setItem('username', result['username']); 
          localStorage.setItem('emailid', result['emailid']); 
          // localStorage.setItem('mobileno', result['mobileno']); 
          // localStorage.setItem('birthdate', result['birthdate']); 
          // localStorage.setItem('gender', result['gender']); 
          // localStorage.setItem('photo', result['photo']); 

          this.router.navigate(['/jobseekerdas']);// User Dashboard
        } else {
          this.error_message = data// To Show Error Message in Login Page
        }
      });
  }

  clearMessage() {
    this.error_message = ''
  }
}


