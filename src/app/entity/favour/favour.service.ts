import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Favour} from "./favour";
import {fav} from "../../fav/fav";

@Injectable()
export class FavourService {

  private favourUrl: string;

  constructor(private http: HttpClient) {
    this.favourUrl = 'http://localhost:8080/favours';
  }

  public getAllFavours(): Observable<Favour[]> {
    return this.http.get<Favour[]>(`${this.favourUrl}`);
  }

  public getFavourById(id: string): Observable<Favour> {
    return this.http.get<Favour>(`${this.favourUrl}/${id}`);
  }

  public getFavoursOfMaster(id: string): Observable<fav[]> {
    return this.http.get<fav[]>(`${this.favourUrl}/${id}/get-favours-of-master`);
  }

  public createFavour(masterId: string, categoryId: string, favour: Favour): Observable<Favour> {
    return this.http.post<Favour>(`${this.favourUrl}/master/${masterId}/category/${categoryId}/addfavours`, favour);
  }

  public updateFavourPartially(id: string, favour: Favour): Observable<void> {
    return this.http.patch<void>(`${this.favourUrl}/${id}`, favour);
  }

  public deleteFavour(id: string): Observable<void> {
    return this.http.delete<void>(`${this.favourUrl}/${id}`);
  }


}
