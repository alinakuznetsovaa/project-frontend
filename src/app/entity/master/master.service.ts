import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import {Master} from "./master";
@Injectable()
export class MasterService {

  private mastersUrl: string;

  constructor(private http: HttpClient) {
    this.mastersUrl = 'http://localhost:8080/masters';
  }

  public getAllMasters(): Observable<Master[]> {
    return this.http.get<Master[]>(this.mastersUrl);
  }

  public getMasterById(masterId: number): Observable<Master>{
    return this.http.get<Master>(`${this.mastersUrl}/${masterId}`);
  }

  public createMaster(master: Master): Observable<void>{
    return this.http.post<void>(`${this.mastersUrl}`,master);
  }

  public updateMaster(masterId: number, master: Master): Observable<void>{
    return this.http.put<void>(`${this.mastersUrl}/${masterId}`,master);
  }

  public deleteMaster(clientId: number): Observable<void>{
    return this.http.delete<void>(`${this.mastersUrl}/${clientId}`);
  }


}
