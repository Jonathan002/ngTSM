import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLowService {

  readonly isSignedIn = false;

  constructor() { }

  signIn() {
    (this.isSignedIn as any) = true;
    // + other internal work
  }

  signOut() {
    (this.isSignedIn as any) = false;
    // + other internal work
  }

}
