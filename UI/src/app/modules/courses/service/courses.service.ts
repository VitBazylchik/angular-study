import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../shared/models/course';
import { Observable, of } from 'rxjs';
import { finalize, catchError, retry } from 'rxjs/operators';
import { Author } from '../../shared/models/author';
import { BlockService } from '../../shared/services/block.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public start = 0;
  public count = 3;
  public maxId: number;
  private numOfRetries = 2;
  private BASE_URL = 'http://localhost:3004';

  constructor(private http: HttpClient, private blockService: BlockService) {
    // I'm doing this to find max Id to create new items
    this.http.get<Course[]>(`${this.BASE_URL}/courses`).subscribe(
      (courses: Course[]): void => {
        this.maxId = courses.reduce((acc: number, course: Course) => Math.max(acc, course.id), 0);
      },
      console.error
    );
  }

  public getList(searchText?: string): Observable<Course[]> {
    this.blockService.block = true;
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
      finalize(() => {
        setTimeout(() => {
          this.blockService.block = false;
        }, 100);
      }),
      catchError(() => of(null))
    );
  }

  public createItem(
      name: string,
      description: string,
      date: string,
      authors: Author[],
      length: number
    ): Observable<Object> {
      this.blockService.block = true;
      this.maxId += 1;
      const itemDate = new Date(date);
      const isTopRated = false;
      const item = {
        id: this.maxId,
        name,
        date: itemDate,
        length,
        authors,
        description,
        isTopRated,
      };
      return this.http.post(`${this.BASE_URL}/courses`, item);
  }

  public getItemById(id: number): Observable<Course> {
    this.blockService.block = true;
    return this.http.get<Course>(`${this.BASE_URL}/courses/${id}`).pipe(
      retry(this.numOfRetries)
    );
  }

  public updateItem(
      id: number,
      name: string,
      description: string,
      date: string,
      authors: Author[],
      length: number
    ): Observable<Object> {
      this.blockService.block = true;
      const isTopRated = false;
      const itemDate = new Date(date);
      const item = {
        id,
        name,
        date: itemDate,
        length,
        authors,
        description,
        isTopRated,
      };
      return this.http.patch(`${this.BASE_URL}/courses/${id}`, item);
  }

  public removeItem(id: number): Observable<Object> {
    this.blockService.block = true;
    return this.http.delete(`${this.BASE_URL}/courses/${id}`);
  }
}
