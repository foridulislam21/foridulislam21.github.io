import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://localhost:3000/email';
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  PostMessage(input: any) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.api, input, headers);
  }
}
