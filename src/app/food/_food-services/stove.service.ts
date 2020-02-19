import { Injectable } from '@angular/core';
import { FoodSharedStoreService } from './food-shared-store.service';

@Injectable({
  providedIn: 'root'
})
export class StoveService {

  constructor(
    private foodSharedStore: FoodSharedStoreService
  ) { }

  get on() {
    return this.foodSharedStore.stoveOn;
  }
}
