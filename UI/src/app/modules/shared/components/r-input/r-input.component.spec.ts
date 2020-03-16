import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RInputComponent } from './r-input.component';

describe('RInputComponent', () => {
  let component: RInputComponent;
  let fixture: ComponentFixture<RInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
