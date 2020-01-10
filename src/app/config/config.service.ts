import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface User {
  username: string;
  password: string;
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private serverUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getValidLogin(username: string, password: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let user: User;
    user.username = username;
    user.password = password;
      return this.http.post(this.serverUrl, user,
      {headers:headers}).map(res => res.json());
  }
}