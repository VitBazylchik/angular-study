import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../shared/models/course';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Author } from '../../shared/models/author';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public start = 0;
  public count = 3;
  public maxId: number;
  public textFragment: string;
  private BASE_URL = 'http://localhost:3004';

  constructor(private http: HttpClient) {}

  public getList(searchText?: string): Observable<Course[]> {
    this.textFragment = searchText || this.textFragment;
    const params = this.textFragment
    ? {
      start: `${this.start}`,
      count: `${this.count}`,
      sort: 'date',
      textFragment: this.textFragment,
    }
    : {
      start: `${this.start}`,
      count: `${this.count}`,
      sort: 'date',
    };
    return this.http.get<Course[]>(`${this.BASE_URL}/courses`, { params }).pipe(tap((courses: Course[]): void => {
      this.maxId = courses.reduce((acc: number, course: Course) => Math.max(acc, course.id), 0);
    }));
  }

  public createItem(
      name: string,
      description: string,
      date: string,
      authors: Author[],
      length: number
    ): void {
    this.maxId += 1;
    const isTopRated = false;
    const item = {
      id: this.maxId,
      name,
      date,
      length,
      authors,
      description,
      isTopRated,
    };
    this.http.post(`${this.BASE_URL}/courses`, item);
  }

  public getItemById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.BASE_URL}/courses/${id}`);
  }

  public updateItem(
      id: number,
      name: string,
      description: string,
      date: string,
      authors: Author[],
      length: number
    ): void {
      const isTopRated = false;
      const item = {
        id,
        name,
        date,
        length,
        authors,
        description,
        isTopRated,
      };
      this.http.patch(`${this.BASE_URL}/courses/${id}`, item);
  }

  public removeItem(id: number): void {
    this.http.delete(`${this.BASE_URL}/courses/${id}`);
  }
}
