import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

  onClick(text: string): void {
    console.log(text);
  }
}
