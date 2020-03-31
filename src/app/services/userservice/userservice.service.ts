import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private serverUrl = environment.api;

  constructor(private httpClient: HttpClient) { }

  updateUserFirstName(username: string, firstName: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}`+'changeFirstName', { username: username, firstname: firstName }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  updateUserLastName(username: string, lastName: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}`+'changeLastName', { username: username, lastname: lastName }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  updateRole(username: string, role: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}`+'changeRole', { username: username, role: role }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  changeUsername(id: number, username: string, password: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}`+'changeUsername', { username: username, id: id, password: password }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  changePassword(username: string, oldPass: string, newPass: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}`+'changePassword', { username: username, oldPassword: oldPass, newPassword: newPass }, requestOptions)
      .pipe(map(user => JSON.stringify(user)));
  }

  deleteUser(id: number): Observable<string> {
    return this.httpClient.delete(`${this.serverUrl}`+'delete', { responseType: 'text' });
  }

}