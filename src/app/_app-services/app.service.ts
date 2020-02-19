import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { StartHighService } from './start-high.service';
import { UserLowService } from './user.low.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // App State Barrel
  // 3 levels normally - but can also go to Higher or Lower if needed
  constructor(
    // Siblings cannot DI Medium or High Services
    // High Services can DI Medium Services
    public start: StartHighService,
    public auth: AuthService,
    // siblings can DI Low Services
    public user: UserLowService,
  ) { }

}
