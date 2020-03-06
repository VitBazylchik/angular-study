import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: string;
  @Input() text: string;
  @Input() disabled: boolean;
  @Input() colored = false;
  @Output() public btnClick: EventEmitter<void> = new EventEmitter<void>();

  public onClick(): void {
    this.btnClick.emit();
  }
}
