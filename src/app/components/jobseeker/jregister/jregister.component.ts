import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { ConfirmedValidator } from './../jregister/confirmed.validators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-jregister',
  templateUrl: './jregister.component.html',
  styleUrls: ['./jregister.component.css']
})
export class JregisterComponent implements OnInit {

  username:any 
  emailid:any
  password:any
  password2:any
  // confirm_password2:any
  phone_number1:any
  phone_number2:any
  address:any
  message=''
 
  constructor(private router: Router, private userService: UserService) {}
      
  ngOnInit(): void {
  }
  addUser = () => { 
    var body = "username=" + this.username 
        + "&emailid=" + this.emailid 
        + "&password=" + this.password
        + "&address=" + this.address
        + "&phoneno1=" + this.phone_number1
        + "&phoneno2=" + this.phone_number2
        + "&comments=" + ' '
        + "&blacklist=" + false;

    this.userService.createUser(body)
      .subscribe( data => {
        console.log("registered successfully!!")
        this.router.navigate(['jobseeker-login']);
      },
      (error) => {
        this.message = error.error
      });    
  }

  clearMessage() {
    this.message = ''
  }
}


