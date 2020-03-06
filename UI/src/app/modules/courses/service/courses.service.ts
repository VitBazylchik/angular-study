import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: Course[];
  public maxId: number;
  private BASE_URL = 'http://localhost:3004';

  constructor(private http: HttpClient) {
    this.http.get(`${this.BASE_URL}/courses`).subscribe((data: Course[]) => {
      this.courses = data;
      this.maxId = this.courses.reduce((acc: number, course: Course): number => {
        return Math.max(acc, course.id);
      }, 0);
    });
  }

  public getList(): Course[] {
    return this.courses;
  }

  public createItem(
      name: string,
      description: string,
      date: string,
      duration: number
    ): Course[] {
    // this.maxId += 1;
    const isTopRated = false;
    const item = {
      // id: this.maxId,
      name,
      date,
      duration,
      description,
      isTopRated,
    };
    // this.courses.push(item);
    return this.courses;
  }

  public getItemById(id: number): Course {
    return this.courses.find((course: Course) => course.id === id);
  }

  public updateItem(
      id: number,
      name: string,
      description: string,
      date: string,
      duration: number
    ): Course[] {
    const currentItem = this.getItemById(id);
    currentItem.name = name;
    currentItem.description = description;
    currentItem.date = date;
    currentItem.duration = duration;
    return this.courses;
  }

  public removeItem(id: number): Course[] {
    this.courses = this.courses.filter((course: Course) => course.id !== id);
    return this.courses;
  }
}
