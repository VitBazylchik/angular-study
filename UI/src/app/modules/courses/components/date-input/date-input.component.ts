import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  constructor() { }
  public value: string;
  @Output() public change: EventEmitter<string> = new EventEmitter<string>();
  @Input() public valueToEdit: string;

  ngOnInit(): void {
    const valueToFormat = this.valueToEdit || Date.now();
    this.value = formatDate(valueToFormat, 'MM.dd.yyyy', 'en-US');
  }

  onChange(): void {
    this.change.emit(this.value);
  }
}
