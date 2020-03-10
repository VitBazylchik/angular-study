import { Component } from '@angular/core';
import { BlockService } from '../../services/block.service';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent {
  constructor(public blockService: BlockService) {}
}
