import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  constructor() { }
  @Output() public change: EventEmitter<string> = new EventEmitter<string>();
  @Input() public valueToEdit: string;
  public value: string;

  ngOnInit(): void {
    this.value = this.valueToEdit || '';
  }

  onChange(): void {
    this.change.emit(this.value);
  }
}
