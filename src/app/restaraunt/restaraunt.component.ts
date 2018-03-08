import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';

@Component({
  selector: 'mt-restaraunt',
  templateUrl: './restaraunt.component.html'
})
export class RestarauntComponent implements OnInit {

  restaurants: Restaurant[];
  constructor(private restauranteService: RestaurantsService) { }

  ngOnInit() {
    this.restauranteService.restaurantes()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
