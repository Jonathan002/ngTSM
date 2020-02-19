import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';



@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FoodComponent }
    ])
  ]
})
export class FoodModule { }
