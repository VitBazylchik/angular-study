import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  constructor() { }
  public value: string | number = Date.now();

  ngOnInit(): void {
    this.value = formatDate(this.value, 'dd.MM.yyyy', 'en-US');
  }

  public onInput(event) {
    this.value = event.target.value;
  }
}
