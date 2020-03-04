import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor() { }
  public title: string;
  public description: string;
  public date: string;
  public duration: string;
  public authors: string;

  ngOnInit(): void {
  }
  public changeDate(value: string): void {
    this.date = value;
  }
  public changeAuthors(value: string): void {
    this.authors = value;
  }
  public changeDuration(value: string): void {
    this.duration = value;
  }
  public onSave() {}
  public onCancel() {}
}
