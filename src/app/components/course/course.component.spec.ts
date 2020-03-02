import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Component, DebugElement } from '@angular/core';
import { Course } from 'src/app/models/course';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <app-course 
    [course]="course" 
    (delete)="onDelete($event)"
  ></app-course>
  `
})

class TestCourseComponent {
  public course: Course = {
    id: 100,
    title: 'Hello',
    creationDate: Date.now(),
    duration: 50,
    description: 'gggggggagfas',
  };
  public id: number;
  public onDelete(id: number) {
    this.id = id;
  }
}

describe('CourseComponent', () => {
  let component: TestCourseComponent;
  let fixture: ComponentFixture<TestCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCourseComponent);
    component = fixture.componentInstance;
  });

  it('should raise right id', () => {
    fixture.detectChanges();
    const expectedId = 100;
    const deleteBtn: DebugElement = fixture.debugElement.query(By.css('.delete-btn'));
    deleteBtn.triggerEventHandler('click', null);
    expect(component.id).toEqual(expectedId);
  })
});
