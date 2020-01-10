import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { UserComponent } from 'src/components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "http://localhost:4200";

  constructor(private httpClient : HttpClient) {}

  get_facebook_user_login(){
      return this.httpClient.get(this.baseUrl + '/login');
  }
  get_user_login(){
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.baseUrl,{userName: 'userForm.username', password: 'userForm.password'},
    {headers:headers});
  }

}
