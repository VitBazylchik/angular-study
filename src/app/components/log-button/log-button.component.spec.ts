import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogButtonComponent } from './log-button.component';

describe('LogButtonComponent', () => {
  let component: LogButtonComponent;
  let fixture: ComponentFixture<LogButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should paste right text', () => {
    const button = fixture.nativeElement.querySelector('.log-button');
    component.btnText = 'Button text';
    fixture.detectChanges();
    expect(button.innerText).toEqual('Button text');
  })
});
