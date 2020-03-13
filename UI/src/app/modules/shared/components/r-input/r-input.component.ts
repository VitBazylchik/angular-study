import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor  } from '@angular/forms';

@Component({
  selector: 'app-r-input',
  templateUrl: './r-input.component.html',
  styleUrls: ['./r-input.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RInputComponent),
      multi: true
  }]
})
export class RInputComponent implements ControlValueAccessor {
  @Input() public name: string;
  @Input() public type: string;
  @Input() public labelText: string;
  @Input() public hint: boolean;
  @Input() public invalid: boolean;
  @Input() public hintText: string;
  @Input() public long = false;
  @Input() public placeholder: string;
  @Input() public value: string;

  onChange(value: string): void {}
  onTouched(): void {}

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
