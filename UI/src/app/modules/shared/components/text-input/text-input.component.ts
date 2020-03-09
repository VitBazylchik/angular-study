import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() public name: string;
  @Input() public type: string;
  @Input() public labelText: string;
  @Input() public required: boolean;
  @Input() public hint: string;
  @Input() public long = false;
  @Input() public value: string;
  @Output() public inputChange: EventEmitter<string> = new EventEmitter<string>();
  public placeholder: string;

  public onChange(): void {
    this.inputChange.emit(this.value);
  }

  ngOnInit(): void {
    this.placeholder = `Enter ${this.name}`;
  }
}
