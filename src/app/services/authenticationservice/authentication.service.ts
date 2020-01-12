import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private serverUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getValidLogin(username: string, password: string) {
    return this.http.post<any>(this.serverUrl, { username: username, password: password })
            .pipe(map(user => JSON.stringify(user)));
  }

  setLogout() {}
}