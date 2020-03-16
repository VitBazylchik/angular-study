import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})

export class AuthorsListComponent {
  @Input() public authorsGroup: FormGroup;
  @Input() public numOfAuthor: number;
  @Input() public isOpen: boolean;
}
