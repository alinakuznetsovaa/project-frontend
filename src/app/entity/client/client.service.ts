import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Client} from "./client";
import {recordDtoForClient} from "../recordDto/RecordDtoForClient";
import {login} from "../../login/login";
import {favourDtoForClient} from "../../favourDto/favourDtoForClient";


@Injectable()
export class ClientService {

  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/clients';
  }

  public getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.clientUrl}`);
  }

  public getClientById(clientId: string): Observable<Client> {
    return this.http.get<Client>(`${this.clientUrl}/${clientId}`);
  }
  public getClientOnLogin(log: login): Observable<Client>{
    return this.http.post<Client>(`${this.clientUrl}/get-client-on-login`, log);
  }

  public createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.clientUrl}`, client);
  }

  public updateClientPartially(clientId: string, client: Client): Observable<void> {
    return this.http.patch<void>(`${this.clientUrl}/${clientId}`, client);
  }

  public deleteClient(clientId: string): Observable<void> {
    return this.http.delete<void>(`${this.clientUrl}/${clientId}`);
  }

  public getAllRecordsOfClient(clientId: string): Observable<recordDtoForClient[]> {
    return this.http.get<recordDtoForClient[]>(`${this.clientUrl}/get-all-records-of-client/${clientId}`);
  }

  public getFavoursOfCategory(categoryId: string): Observable<favourDtoForClient[]> {
    return this.http.get<favourDtoForClient[]>(`${this.clientUrl}/get-favours-of-category/${categoryId}`);
  }


}
