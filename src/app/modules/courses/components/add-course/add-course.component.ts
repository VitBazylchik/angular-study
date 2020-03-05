import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../service/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute, 
    private router: Router,
    private coursesService: CoursesService) { 
      console.log(this.activeRoute.data.subscribe(data => console.log(data)));
    }
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
  public onSave() {

  }
  public onCancel() {
    if(confirm('Do you want to cancel editing?')) {
      this.router.navigate(['..']);
    }
  }
}
