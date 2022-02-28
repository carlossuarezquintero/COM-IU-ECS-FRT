import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserResponse } from '@app/store/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter();
  @Input() isAuthorized !: boolean | null;
  @Input() user !: UserResponse | null;

  @Output() signOut = new EventEmitter<void>();


  constructor(
  ) { }

  ngOnInit(): void {
  }

  onClicked() : void {
    this.menuClicked.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }


}
