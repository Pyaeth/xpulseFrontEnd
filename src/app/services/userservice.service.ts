import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseUrl: "localhost:4200";
  getUser(username:string, password: string) {
    this.httpClient.get(this.baseUrl + '/login').subscribe((res)=>{
      console.log(res);
  });
  }
  constructor(private httpClient: HttpClient){}
}
