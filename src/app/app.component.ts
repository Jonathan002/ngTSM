import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from './_app-services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(
    public app: AppService
  ) {}

  ngOnInit() {
    this.app.start.startApp();
  }

  deteminAuthAction() {
    if (this.app.user.isSignedIn) {
      this.app.auth.signOut();
    } else {
      this.app.auth.signIn();
    }
  }

}
