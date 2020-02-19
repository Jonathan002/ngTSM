import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FoodService } from './../_food-services/food.service';
import { AppService } from './../../_app-services/app.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodComponent implements OnInit {

  constructor(
    private app: AppService,
    public food: FoodService,
  ) { }

  ngOnInit() {

    console.log('App Store:', this.app);
    console.log('Food Store:', this.food);

  }

}
