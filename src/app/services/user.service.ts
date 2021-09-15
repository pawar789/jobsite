import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserClass } from '../user_class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // api_url:string = "http://localhost:3000/user"
  api_url:string = "http://localhost:3000/v1/user/" 

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.api_url);
  }

  createUser(body: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.api_url, body, {headers: headers, responseType:'text'});    
  } 

  deleteUser(userid:any) {
    //return this.http.get(this.api_url + '/delete/' + userid);//Interim
    // return this.http.delete(this.api_url + '/' + userid);//Actual
    return this.http.delete(this.api_url + userid);//Actual
  }

  getUserById(userid:any) {
    // return this.http.get<UserClass>(this.api_url + '/' + userid);
    return this.http.get<UserClass>(this.api_url + userid);
  }

  updateUser(body: string, userid: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    // return this.http.put(this.api_url + '/' + userid, body, {headers: headers, responseType:'text'});
    return this.http.put(this.api_url + userid, body, {headers: headers, responseType:'text'});
  }

 

  checkValidUser(body: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.api_url + 'login', body, {headers: headers, responseType:'text'});
  }


}



