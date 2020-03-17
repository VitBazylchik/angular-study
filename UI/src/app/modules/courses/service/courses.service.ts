import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../shared/models/course';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private start = 0;
  private count = 3;
  private numOfRetries = 2;
  private BASE_URL = 'http://localhost:3004';

  constructor(
    private http: HttpClient,
  ) {}

  public incrementCoursesCount(): void {
    const numOfCourses = 3;
    this.count += numOfCourses;
  }

  public getList(searchText?: string): Observable<Course[]> {
    const params = searchText
    ? {
      start: `${this.start}`,
      count: `${this.count}`,
      sort: 'date',
      textFragment: searchText,
    }
    : {
      start: `${this.start}`,
      count: `${this.count}`,
      sort: 'date',
    };
    return this.http.get<Course[]>(`${this.BASE_URL}/courses`, { params }).pipe(
      retry(this.numOfRetries),
      catchError(() => of(null))
    );
  }

  public createItem(item: Course): Observable<Object> {
      return this.http.post(`${this.BASE_URL}/courses`, item);
  }

  public getItemById(id: number | string): Observable<Course> {
    return this.http.get<Course>(`${this.BASE_URL}/courses/${id}`).pipe(
      retry(this.numOfRetries)
    );
  }

  public updateItem(item: Course): Observable<Object> {
      return this.http.patch(`${this.BASE_URL}/courses/${item.id}`, item);
  }

  public removeItem(id: number): Observable<Object> {
    return this.http.delete(`${this.BASE_URL}/courses/${id}`);
  }
}
