import { ChangeDetectionStrategy, Component, OnInit ,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
@Output() menuClicked = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onClicked() : void {
    this.menuClicked.emit();
  }
}
