import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectLoading } from '../../../courses/store/selectors';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent {
  constructor(private store: Store) {}
  public isLoading$ = this.store.pipe(select(selectLoading));
}
