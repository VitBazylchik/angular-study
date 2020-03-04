import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  constructor() { }
  @Output() public change: EventEmitter<string> = new EventEmitter<string>();
  public value: string;

  ngOnInit(): void {
  }

  onChange() {
    this.change.emit(this.value);
  }
}
