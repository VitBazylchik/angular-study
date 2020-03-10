import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../service/courses.service';
import { Author } from 'src/app/modules/shared/models/author';
import { Course } from 'src/app/modules/shared/models/course';
import { DatePipe } from '@angular/common';
import { BlockService } from 'src/app/modules/shared/services/block.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private blockService: BlockService,
  ) {}

  public isEditCourse = this.activeRoute.snapshot.data.edit;
  public name = '';
  public description = '';
  public date = '';
  public length: number;
  public authors: string;
  public id: number;
  public currentCourse: Course;
  private datePipe = new DatePipe('en-US');

  ngOnInit(): void {
    if (this.isEditCourse) {
      this.id = this.activeRoute.snapshot.params.id;
      this.coursesService.getItemById(this.id).subscribe((course) => {
        this.blockService.block = false;
        this.name = course.name;
        this.description = course.description;
        this.date = this.datePipe.transform(course.date, 'M/d/yyyy');
        this.length = course.length;
        this.authors = course.authors.reduce((acc: string, author: Author, idx: number): string => {
          return idx === 0
          ? `${author.name} ${author.lastName}`
          : `${acc}, ${author.name} ${author.lastName}`;
        }, '');
      });
    } else {
      this.date = this.datePipe.transform(Date.now(), 'M/d/yyyy');
    }
  }
  public changeName(value: string): void {
    this.name = value;
  }
  public changeDescription(value: string): void {
    this.description = value;
  }
  public changeDate(value: string): void {
    this.date = value;
  }
  public changeAuthors(value: string): void {
    this.authors = value;
  }
  public changeDuration(value: string): void {
    this.length = parseInt(value, 10) || 0;
  }

  private updateRequest(date: string, authors: Author[], duration: number): void {
    this.coursesService
      .updateItem(this.id, this.name, this.description, date, authors, duration)
      .subscribe(() => this.router.navigate(['..']), console.error);
  }
  private createRequest(date: string, authors: Author[], duration: number): void {
    this.coursesService
      .createItem(this.name, this.description, date, authors, duration)
      .subscribe(() => this.router.navigate(['..']), console.error);
  }

  public onSave(): void {
    const date = new Date(this.date).toString();
    const duration = this.length;
    const authors = this.authors
      .trim()
      .split(',')
      .map((author: string) => author.trim().split(' '))
      .map((authorArr): Author => ({name: authorArr[0], lastName: authorArr[1] || ''}));
    this.id
      ? this.updateRequest(date, authors, duration)
      : this.createRequest(date, authors, duration);
  }

  public onCancel(): void {
    if (confirm('Do you want to cancel editing?')) {
      this.router.navigate(['..']);
    }
  }
}
