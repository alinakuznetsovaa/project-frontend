import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Client } from "./client";

import { environment } from 'src/environments/environment';
import {Record} from "../record/record";
import {rec} from "../rec/rec";
@Injectable()
export class ClientService{

  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/clients';
  }
  public getAllClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.clientUrl}`);
  }
  public getClientById(clientId: string): Observable<Client>{
    return this.http.get<Client>(`${this.clientUrl}/${clientId}`);
  }

  public createClient(client: Client): Observable<void>{
    return this.http.post<void>(`${this.clientUrl}`,client);
  }

  public updateClient(clientId: string, client: Client): Observable<void>{
    return this.http.put<void>(`${this.clientUrl}/${clientId}`, client);
  }

  public deleteClient(clientId: string): Observable<void>{
    return this.http.delete<void>(`${this.clientUrl}/${clientId}`);
  }

  public getAllRecordsOfClient(clientId: string): Observable<rec[]>{
    return this.http.get<rec[]>(`${this.clientUrl}/get-all-records-of-client/${clientId}`)
  }


}
