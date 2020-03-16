import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public onSubmit(event: Event): void {
    event.preventDefault();
  }

  public onSearch(text: string): void {
    this.search.emit(text);
  }
}
