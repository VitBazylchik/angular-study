import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  public searchText: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public inputChange(value: string): void {
    this.searchText = value;
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
  }

  public onClick(text: string): void {
    this.search.emit(text);
    this.searchText = '';
  }
}
