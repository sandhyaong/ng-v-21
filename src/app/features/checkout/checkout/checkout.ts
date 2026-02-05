import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
private cart = inject(CartService);
 private router = inject(Router);
private toast = inject(ToastService);
   
cartItems = this.cart.cartItems;
totalPrice = this.cart.totalPrice;
placeOrder() {
    this.toast.showToast({
      type: 'success',
      message: 'Order placed successfully 🎉',
      duration: 3000
    });

    // step 2: clear cart
    this.cart.clearCart();

    // redirect to products / success page
    this.router.navigate(['/']);
  }
}
