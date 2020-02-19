import { Injectable } from '@angular/core';
import { PotatoService } from './potato.service';
import { SalmonService } from './salmon.service';
import { StoveService } from './stove.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  // Barrel of Food
  constructor(
    public potato: PotatoService,
    public salmon: SalmonService,
    public stove: StoveService
  ) { }


}
