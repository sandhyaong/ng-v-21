import { Component, inject, input } from '@angular/core';
import { Product } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
 product = input<Product>();
    private cart = inject(CartService);

    addToCart() {
        console.log(`Product added to cart: ${this.product()?.Title}`);
    this.cart.addToCart(this.product()!);
    }
}
