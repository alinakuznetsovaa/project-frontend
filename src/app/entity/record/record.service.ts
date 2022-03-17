import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Record} from "./record";



@Injectable()
export class RecordService {

  private RecordsUrl: string;

  constructor(private http: HttpClient) {
    this.RecordsUrl = 'http://localhost:8080/records';
  }

  public getAllRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.RecordsUrl);
  }


  public getRecordById(recordId: string): Observable<Record> {
    return this.http.get<Record>(`${this.RecordsUrl}/${recordId}`);
  }


  public createRecord(record: Record): Observable<Record> {
    return this.http.post<Record>(`${this.RecordsUrl}`, record);
  }

  public updateRecord(recordId: string, record: Record): Observable<void> {
    return this.http.put<void>(`${this.RecordsUrl}/${recordId}`, record);
  }

  public deleteRecord(recordId: string): Observable<void> {
    return this.http.delete<void>(`${this.RecordsUrl}/${recordId}`);
  }


}
