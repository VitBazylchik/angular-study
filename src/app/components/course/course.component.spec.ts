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
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let testHostComponent: TestCourseComponent;
  let fixtureHost: ComponentFixture<TestCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixtureHost = TestBed.createComponent(TestCourseComponent);
    testHostComponent = fixtureHost.componentInstance;
  });

  it('should raise right id', () => {
    fixtureHost.detectChanges();
    const expectedId = 100;
    const deleteBtn: DebugElement = fixtureHost.debugElement.query(By.css('.delete-btn'));
    deleteBtn.triggerEventHandler('click', null);
    expect(testHostComponent.id).toEqual(expectedId);
  })
});
