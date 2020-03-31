import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private serverUrl = environment.api;
  currentUserValue: string;

  constructor(private httpClient: HttpClient) { }

   getStatistics(uid: number, units: string) {
    const requestOptions = {
      headers : new HttpHeaders({'Content-Type': 'application/json'
    }),
    };
    return this.httpClient.post<any>(`${this.serverUrl}`+'statistics',
    { "uid": uid,
      "unit": units
      }, 
    requestOptions)
            .pipe(map(statistic => JSON.stringify(statistic)));
  }
}