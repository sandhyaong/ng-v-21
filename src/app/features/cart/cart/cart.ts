import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
private cart = inject(CartService);
cartItems = this.cart.cartItems;
totalPrice = this.cart.totalPrice;
increase(id: number) {
  this.cart.IncreaseQuantity(id);
}

decrease(id: number) {
  this.cart.DecreaseQuantity(id);
}
removeFromCart(productId: number) {
    this.cart.removeFromCart(productId);
}
  clear() {
    this.cart.clearCart();
  }
}
