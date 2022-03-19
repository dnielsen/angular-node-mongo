import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL!: string;

  // Header Configrations
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseURL + 'tutorials';
  }

  getReq() {
    return this.http.get(this.baseURL+ '/get', this.httpOptions);
  }
  
  postReq(data: any) {
    return this.http.post(this.baseURL + '/add', data, this.httpOptions);
  }
}
