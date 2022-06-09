import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Record} from "./record";
import {recordDtoForClient} from "../recordDto/RecordDtoForClient";
import {recordDtoForClientToCreateRecord} from "../recordDto/RecordDtoForClientToCreateRecord";



@Injectable()
export class RecordService {

  private RecordsUrl: string;

  constructor(private http: HttpClient) {
    this.RecordsUrl = 'http://localhost:8080/records';
  }

  public getAllRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.RecordsUrl}`);
  }

  public getRecordsOfMasterOnFavour(masterId: string, categoryId: string): Observable<recordDtoForClientToCreateRecord[]> {
    return this.http.get<recordDtoForClientToCreateRecord[]>(`${this.RecordsUrl}/master/${masterId}/category/${categoryId}`);
  }


  public getRecordById(recordId: string): Observable<Record> {
    return this.http.get<Record>(`${this.RecordsUrl}/${recordId}`);
  }


  public createRecord(clientId: string, masterId: string, favourId: string,record: Record): Observable<void> {
    return this.http.post<void>(`${this.RecordsUrl}/create/client/${clientId}/master/${masterId}/favour/${favourId}`, record);
  }

  public updateRecord(recordId: string, record: Record): Observable<void> {
    return this.http.put<void>(`${this.RecordsUrl}/${recordId}`, record);
  }

  public deleteRecord(recordId: string): Observable<void> {
    return this.http.delete<void>(`${this.RecordsUrl}/${recordId}`);
  }


}
