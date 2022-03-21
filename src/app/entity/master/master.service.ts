import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Master} from "./master";
import {recordDtoForClient} from "../recordDto/RecordDtoForClient";
import {login} from "../../login/login";

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

  public getMasterOnLogin(log: login): Observable<Master> {
    return this.http.post<Master>(`${this.mastersUrl}/get-master-on-login`, log);
  }

  public setFreeDatesOfMaster(category_id: string, master_id: string, date: Date): Observable<void> {
    return this.http.post<void>(`${this.mastersUrl}/category/${category_id}/master/${master_id}/addfreetime`, date);
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

  public getRecordsOfMaster(masterId: string): Observable<recordDtoForClient[]> {
    return this.http.get<recordDtoForClient[]>(`${this.mastersUrl}/get-all-records-of-master/${masterId}`)
  }


}
