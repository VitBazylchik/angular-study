import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogButtonComponent } from './log-button.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <app-log-button [btnText]="btnText"></app-log-button>
  `
})

class LogButtonTestComponent {
  public btnText: string = 'Test button';
}

describe('LogButtonComponent', () => {
  let component: LogButtonComponent;
  let fixture: ComponentFixture<LogButtonComponent>;
  let testComponent: LogButtonTestComponent;
  let fixture2: ComponentFixture<LogButtonTestComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogButtonComponent, LogButtonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogButtonComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture2 = TestBed.createComponent(LogButtonTestComponent);
    testComponent = fixture2.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should paste right text', () => {
    fixture2.detectChanges();
    const expectedText: string = 'Test button';
    const button: HTMLElement = fixture2.nativeElement.querySelector(".log-button");
    expect(button.innerText).toEqual(expectedText);
  })
});
