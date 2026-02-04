import { computed, Injectable, signal } from "@angular/core";
import { Product } from "./product.service";

@Injectable({
    providedIn: 'root'
})  
export class CartService {
    cartItems = signal<Product[]>([]);
    // cartCount = signal<number>(0);

    // addToCart(product: Product) {
    //     this.cartItems.update(items => [...items, product]);
    //     this.cartCount.set(this.cartItems().length);
    // }
    // removeFromCart(productId: number) {
    //     this.cartItems.update(items => items.filter(item => item.id !== productId));
    //     this.cartCount.set(this.cartItems().length);
    // }
    cartCount = computed(() => this.cartItems().length);

    addToCart(product: Product) {
        this.cartItems.update(items => [...items, product]);
    }
    removeFromCart(productId: number) {
        this.cartItems.update(items => items.filter(item => item.id !== productId));
    }

}