import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  constructor() { }
  public value: string = `${Date.now()}`;
  @Output() public change: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.value = formatDate(this.value, 'MM.dd.yyyy', 'en-US');
    this.onChange();
  }

  onChange() {
    this.change.emit(this.value);
  }
}
