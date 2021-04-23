import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  startCountdown() {
    return this._http.get<any>(this.url + 'start');
  }

  getTimeRemaining(): Observable<any> {
    return this._http.get<any>(this.url + 'time-remaining');
  }

  
}
