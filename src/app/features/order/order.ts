import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  constructor() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
private router = inject(Router);
private cartService = inject(CartService);

totalAmount = this.cartService.totalPrice;
}
