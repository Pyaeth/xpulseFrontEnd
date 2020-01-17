import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private serverUrl = 'http://localhost:8080';
  currentUserValue: string;

  constructor(private httpClient: HttpClient) { }

  getValidLogin(username: string, password: string) {
    const requestOptions = {
      headers : new HttpHeaders({'Content-Type': 'application/json'
    }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}/login`, { username: username, password: password }, requestOptions)
            .pipe(map(user => JSON.stringify(user)));
  }

  setLogout() {
    sessionStorage.clear();
  }

  createUser(username: string, password: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}/create`, { username: username, password: password }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }
}