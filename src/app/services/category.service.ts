import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, CategoryResponse } from '../models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<Category[]> {
    const url = 'https://opentdb.com/api_category.php';
    return this.http
      .get<CategoryResponse>(url)
      .pipe(map((res: CategoryResponse) => res.trivia_categories));
  }
}
