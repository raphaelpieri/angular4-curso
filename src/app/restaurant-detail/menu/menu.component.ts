import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../restaraunt/restaurants.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../menu-item/menu-item-model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;
  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id'];
    this.menu = this.restaurantService.menuOfRestaurant(id);
  }

  addMenuitem(item: MenuItem) {
    console.log(item);
  }

}
