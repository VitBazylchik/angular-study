import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.scss']
})
export class AuthorsInputComponent implements OnInit {

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
