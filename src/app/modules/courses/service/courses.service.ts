import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
    {
      id: 1,
      title: "Title 1",
      creationDate: Date.now() - 100,
      duration: 59,
      description: "BLALBLALBA",
      topRated: false,
    },
    {
      id: 2,
      title: "Title 2",
      creationDate: Date.now() - 10**11,
      duration: 122,
      description: "BLALBLALBgsdgfdgdfhfghA",
      topRated: true,
    },
    {
      id: 3,
      title: "ETitle 3",
      creationDate: Date.now() - 10**10,
      duration: 96,
      description: "BLALBLALBgsdgfdgdfhfghA",
      topRated: false,
    }
  ]

  constructor() { }

  public getList(): Course[] {
    return this.courses;
  }

  public createItem(title: string, duration: number, description: string): Course[] {
    const coursesArrLength = this.courses.length;
    const nextId = this.courses[coursesArrLength - 1].id + 1;
    const creationDate = Date.now();
    const topRated = false;
    const item = {
      id: nextId,
      title,
      creationDate,
      duration,
      description,
      topRated,
    }
    this.courses.push(item);
    return this.courses;
  }

  public getItemById(id: number): Course {
    return this.courses.find((course: Course) => course.id === id);
  } 

  public updateItem(id: number, newTitle: string, newDescription: string): Course[] {
    const currentItem = this.getItemById(id);
    currentItem.title = newTitle;
    currentItem.description = newDescription;
    return this.courses;
  }

  public removeItem(id: number): Course[] {
    this.courses = this.courses.filter((course: Course) => course.id !== id);
    return this.courses;
  }
}
