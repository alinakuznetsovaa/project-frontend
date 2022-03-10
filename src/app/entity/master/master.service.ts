import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Master} from "./master";
import {rec} from "../rec/rec";

@Injectable()
export class MasterService {

  private mastersUrl: string;

  constructor(private http: HttpClient) {
    this.mastersUrl = 'http://localhost:8080/masters';
  }

  public getAllMasters(): Observable<Master[]> {
    return this.http.get<Master[]>(this.mastersUrl);
  }


  public getMasterById(masterId: string): Observable<Master> {
    return this.http.get<Master>(`${this.mastersUrl}/${masterId}`);
  }

  public createMaster(master: Master): Observable<Master> {
    return this.http.post<Master>(`${this.mastersUrl}`, master);
  }

  public updateMaster(masterId: string, master: Master): Observable<void> {
    return this.http.put<void>(`${this.mastersUrl}/${masterId}`, master);
  }

  public deleteMaster(masterId: string): Observable<void> {
    return this.http.delete<void>(`${this.mastersUrl}/${masterId}`);
  }

  public getRecordsOfMaster(masterId: string): Observable<rec[]> {
    return this.http.get<rec[]>(`${this.mastersUrl}/get-all-records-of-master/${masterId}`)
  }


}
