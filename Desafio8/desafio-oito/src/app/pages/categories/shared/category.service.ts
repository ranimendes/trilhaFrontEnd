import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Category } from './category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiPath = environment.baseUrl + "/categorias";
  private userId:string ="user_id=rani_mendes";

  constructor(private http: HttpClient) { }


  getAll(): Observable<Category[]> {
    return this.http
      .get(this.apiPath + '?user_id=rani_mendes')
      .pipe(catchError(this.handleError), map(this.jsonDataToCategories));
  }

  getById(id: number): Observable<Category> {
    const url = `${this.apiPath}/${id}` + '?user_id=rani_mendes';

    return this.http
      .get(url)
      .pipe(catchError(this.handleError), map(this.jsonDataToCategory));
  }


  create(category: Category): Observable<Category> {
    category.user_id = "rani_mendes"
    category.id = Math.ceil(Math.random()*100).toString()

    return this.http
      .post(this.apiPath + '?user_id=lara_correa', category)
      .pipe(catchError(this.handleError), map(this.jsonDataToCategory));
  }

  update(category: Category): Observable<Category> {
    const url = `${this.apiPath}/${category.id}` + '?user_id=rani_mendes';
    // const url = `${this.apiPath}`

    return this.http.put(url, category).pipe(
      catchError(this.handleError),
      map(() => category)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}` + '?user_id=rani_mendes&id=' + `${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }



  // PRIVATE METHODS

  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }

  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}
