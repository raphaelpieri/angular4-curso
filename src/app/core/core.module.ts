import {NgModule} from '@angular/core';
import {ShoppingCartServices} from '../restaurant-detail/shopping-cart/shopping-cart-services';
import {OrderService} from '../order/order.service';
import {RestaurantsService} from '../restaraunt/restaurants.service';

@NgModule({
  providers: [ShoppingCartServices, OrderService, RestaurantsService]
})
export class CoreModule {}
