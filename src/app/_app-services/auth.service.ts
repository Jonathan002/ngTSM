import { Injectable } from '@angular/core';
import { UserLowService } from './user.low.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private user: UserLowService,
    // private http: HttpClientService.
  ) { }

    signIn() {
      // return this.http.get().pipe(tap(() => {
          this.user.signIn();
      // }))
    }

    signOut() {
      this.user.signOut();
      // delete cookies etc..
    }

    init() {
      // if cookie/jwt/etc
      this.user.signIn();
    }

}
