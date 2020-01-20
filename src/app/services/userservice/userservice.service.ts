import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private serverUrl = 'http://localhost:8081';

  constructor(private httpClient: HttpClient) { }

  updateUserFirstName(username: string, firstName: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}/changeFirstName`, { username: username, firstname: firstName }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  updateUserLastName(username: string, lastName: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}/changeLastName`, { username: username, lastname: lastName }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  changeUsername(id: number, username: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}/changeUsername`, { username: username, id: id }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  changePassword(username: string, newPass: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}/changePassword`, { username: username, password: newPass }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  deleteUser(id: number): Observable<string> {
    return this.httpClient.delete(`${this.serverUrl}/delete`, { responseType: 'text' });
  }

}