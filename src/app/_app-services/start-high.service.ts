import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { QueryService } from './query.service';

@Injectable({
  providedIn: 'root'
})
export class StartHighService {

  constructor(
    private query: QueryService,
    private auth: AuthService
  ) { }

  startApp() {
    this.query.init();
    this.auth.init();
  }
}
