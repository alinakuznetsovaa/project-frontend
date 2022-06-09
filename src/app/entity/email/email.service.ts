import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Email} from "./mail";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http :HttpClient) { }

  private baseUrl = 'http://localhost:8080/clients/email';

  sendEmail(email :Email): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}`, email);
  }

}
