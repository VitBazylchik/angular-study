import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  constructor() { }
  public value: string = formatDate(Date.now(), 'MM.dd.yyyy', 'en-US') ;
  @Output() public change: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onChange() {
    this.change.emit(this.value);
  }
}
