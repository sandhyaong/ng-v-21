import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from "@angular/core";
import { Product } from "./product.service";
import { isPlatformBrowser } from "@angular/common";

export type CartItem = Product & { quantity: number };

@Injectable({
    providedIn: 'root'
})  
export class CartService {

     private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  constructor() {
      if (this.isBrowser) {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.cartItems.set(JSON.parse(saved));
    }

    effect(() => {
      localStorage.setItem(
        'cart',
        JSON.stringify(this.cartItems())
      );
    });
}
  }
    // cartItems = signal<Product[]>([]);
    // cartCount = computed(() => this.cartItems().length);

    // addToCart(product: Product) {
    //     this.cartItems.update(items => [...items, product]);
    // }
    // removeFromCart(productId: number) {
    //     this.cartItems.update(items => items.filter(item => item.id !== productId));
    // }
    // clearCart() {
    //     this.cartItems.set([]);
    // }

// State
     cartItems = signal<CartItem[]>([]);
     cartCount = computed(() => this.cartItems().reduce((count, item) => count + item.quantity, 0));
     totalPrice = computed(() => this.cartItems().reduce((total, item) => total + item.price * item.quantity, 0));

// Actions
        addToCart(product: Product) {   
        this.cartItems.update(items => {
            const itemIndex = items.findIndex(item => item.id === product.id);
            if (itemIndex !== -1) {
                const updatedItems = [...items];
                updatedItems[itemIndex] = { ...updatedItems[itemIndex], quantity: updatedItems[itemIndex].quantity + 1 };
                return updatedItems;
            } else {
                return [...items, { ...product, quantity: 1 }];
            }
        });
    }
    IncreaseQuantity(productId: number) {
        this.cartItems.update(items => {
            const updatedItems = items.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return updatedItems;
        });
    }
    DecreaseQuantity(productId: number) {
        this.cartItems.update(items => {        
            const updatedItems = items.map(item => {
                if (item.id === productId && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }   
                return item;
            });
            return updatedItems;
        });
    }

     removeFromCart(productId: number) {
    this.cartItems.update(items =>
      items.filter(i => i.id !== productId)
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}