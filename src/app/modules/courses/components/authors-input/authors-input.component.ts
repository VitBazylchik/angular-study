import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.scss']
})
export class AuthorsInputComponent implements OnInit {

  constructor() { }
  @Output() public change: EventEmitter<string> = new EventEmitter<string>();
  public value: string;

  ngOnInit(): void {
  }

  onChange() {
    this.change.emit(this.value);
  }
}
