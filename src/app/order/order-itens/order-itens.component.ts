import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[];
  @Output() increaseQtd = new EventEmitter<CartItem>();
  @Output() decreaseQtd = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQtd.emit(item);
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQtd.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }

}
