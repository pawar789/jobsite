import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public loginStatus = 0;// 0 = not logged in, 1 = logged in
  public jwtToken = '';// JWT - Json Web Token
  public _id = '';
  public username = '';
  public emailid = '';
  public password = '';
  // public mobileno = 0;
  // public birthdate = '';
  // public gender = '';
  // public photo = '';

  constructor() { }

  resetAll() {
    this.loginStatus = 0;
    this.jwtToken = '';
    this._id = '';
    this.username = '';
    this.emailid = '';
    this.password = '';
    // this.mobileno = 0;
    // this.birthdate = '';
    // this.gender = '';
    // this.photo = '';
  }
  setLoginStatus(status : number) {
    this.loginStatus = status;
  }
  getLoginStatus() {
    return this.loginStatus
  }
  //
  setJwtToken(token : string) {
    this.jwtToken = token;
  }
  getJwtToken() {
    return this.jwtToken;
  }
  // setphoto(x : string) {
  //   this.photo = x;
  // }
  // getphoto() {
  //   return this.photo;
  // }
  //
  set_id(x : string) {
    this._id = x;
  }
  get_id() {
    return this._id;
  }
  //
  setusername(x : string) {
    this.username = x;
  }
  getusername() {
    return this.username;
  }
  //
  setemailid(x : string) {
    this.emailid = x;
  }
  getemailid() {
    return this.emailid;
  }
  //
  setpassword(x : string) {
    this.password = x;
  }
  getpassword() {
    return this.password;
  }
  //
  // setmobileno(x : number) {
  //   this.mobileno = x;
  // }
  // getmobileno() {
  //   return this.mobileno;
  // }
  //
  // setbirthdate(x : string) {
  //   this.birthdate = x;
  // }
  // getbirthdate() {
  //   return this.birthdate;
  // }
  //
  // setgender(x : string) {
  //   this.gender = x;
  // }
  // getgender() {
  //   return this.gender;
  // }
}