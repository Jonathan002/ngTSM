import { Injectable } from '@angular/core';

// Will not be included in the barrel - pattern is meant to keep state to it's own class
@Injectable({
  providedIn: 'root'
})
export class FoodSharedStoreService {

  constructor() { }

  // prefix owning class
  stoveOn = false;

  // + other shared utilities like observables to help communicate state..
  // Last resort if "Lower" and "Higher" Services can't be used
}
