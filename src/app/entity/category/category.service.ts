import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Category} from "./category";

@Injectable()
export class CategoryService {

  private categoryUrl: string;

  constructor(private http: HttpClient) {
    this.categoryUrl = 'http://localhost:8080/categories';
  }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.categoryUrl}`);
  }

  public getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.categoryUrl}/${id}`);
  }

  public createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.categoryUrl}`, category);
  }

  public updateCategoryPartially(id: string, category: Category): Observable<void> {
    return this.http.patch<void>(`${this.categoryUrl}/${id}`, category);
  }

  public deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.categoryUrl}/${id}`);
  }


}
