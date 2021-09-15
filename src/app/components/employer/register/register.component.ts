import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
// import { ConfirmedValidator } from './../register/confirmed.validators';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { UserService } from "./../../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // form: FormGroup = new FormGroup({});
  ngOnInit(): void {
  }


  employer_name: any
  company_name:any
  email_id:any
  pass_word:any
  // password:any
  confirm_password:any
  phone_number:any
  phone_number2:any
  address:any
  message=''
 
  constructor( private http: HttpClient, private router: Router,private userService:UserService) {}

  addUser = () => {
    var body = "&employer_name=" + this.employer_name 
       + "&company_name=" + this.company_name
        + "&email_id=" + this.email_id 
        + "&pass_word=" + this.pass_word
        + "&confirm_password=" + this.confirm_password
        + "&phone_number=" +this.phone_number
        + "&phone_number2=" +this.phone_number2
        + "&address=" +this.address;
        
    this.userService.createUser(body)
      .subscribe( data => {
        alert('Registration done successfully... ');
        this.router.navigate(['employer-login']);
      },
      (error) => {
        this.message = error.error
      });
  }

  clearMessage() {
    this.message = ''
  }
}





//       (error : any) => {
//         this.message = error.error
//       });
//   }
// }

//   clearMessage() {
//     this.message = ''
//   }
// }
// }

    // this.form = fb.group({
    //   password: ['', [Validators.required]],
    //   confirm_password: ['', [Validators.required]]
    //   }, { 
    //   validator: ConfirmedValidator('password', 'confirm_password')
    //   })
    //   }
    //   get f(){
      // return this.form.controls;
    //   }
   
      // submit = () =>{
      //  let obj = { employer_name: this.employer_name, email_id: this.email_id, phone_number: this.phone_number, 
      //   phone_number2: this.phone_number2, company_name: this.company_name, 
      //   address: this.address, password:this.pass_word, confirm_password: this.confirm_password}

      //  this.http.post("http://localhost:5555/employer/", obj).subscribe(
      //       (result: any) => {
      //         alert('Registration done successfully... ')
             
      //         this.router.navigate(['employer-login']);
      //         }
            
      //     )
            // }
 // console.log(this.form.value);
      // console.log(obj);
      // }
      
  // ngOnInit(): void {
  // }
// }
