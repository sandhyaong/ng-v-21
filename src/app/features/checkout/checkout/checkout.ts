import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
private cart = inject(CartService);
 private router = inject(Router);
cartItems = this.cart.cartItems;
totalPrice = this.cart.totalPrice;
placeOrder() {
    alert('Order placed successfully 🎉');

    // step 2: clear cart
    this.cart.clearCart();

    // redirect to products / success page
    this.router.navigate(['/']);
  }
}
