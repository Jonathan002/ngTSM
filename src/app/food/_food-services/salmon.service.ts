import { Injectable } from '@angular/core';
import { FoodSharedStoreService } from './food-shared-store.service';

@Injectable({
  providedIn: 'root'
})
export class SalmonService {

  // Type Protected State (Does not Affect Runtime - No Garbage Collection or Deep Selector Cloning)
  readonly raw = true;
  readonly pounds = 12;

  constructor(
    // Shared State Accross DI Feature Store - avoid using unless necessary
    // Prefer Lower or Higher Services instead..
    private foodSharedStore: FoodSharedStoreService
  ) { }

  // Mutate State (Typing is Retained vs Retying ngrx actions)
  cookActionReducer() {
    (this.foodSharedStore.stoveOn) = true;
    (this.raw as any) = false;
    (this.pounds as any) = this.pounds * 0.75;
  }

}
