import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: Course[] = [
    {
      id: 1,
      title: "Title 1",
      creationDate: Date.now() - 10**8,
      duration: 59,
      description: "BLALBLALBA",
      topRated: false,
      authors: 'Kek Cheburek'
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
  ];
  public maxId = 3;

  constructor() { }

  public getList(): Course[] {
    return this.courses;
  }

  public createItem(
      title: string,
      description: string,
      creationDate: number,
      duration: number
    ): Course[] {
    this.maxId += 1;
    const topRated = false;
    const item = {
      id: this.maxId,
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

  public updateItem(
      id: number,
      title: string,
      description: string,
      creationDate: number,
      duration: number
    ): Course[] {
    const currentItem = this.getItemById(id);
    currentItem.title = title;
    currentItem.description = description;
    currentItem.creationDate = creationDate;
    currentItem.duration = duration;
    return this.courses;
  }

  public removeItem(id: number): Course[] {
    this.courses = this.courses.filter((course: Course) => course.id !== id);
    return this.courses;
  }
}
