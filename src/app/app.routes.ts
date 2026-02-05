import { Routes } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';
import { Cart } from './features/cart/cart/cart';
import { Login } from './features/auth/login/login';
import { ProductDetails } from './features/products/product-details/product-details';
import { Checkout } from './features/checkout/checkout/checkout';
import { Order } from './features/order/order';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
    { path: '', component: ProductList },
    { path: 'cart', component: Cart },
    { path: 'login', component: Login },
    { path: 'product/:id', component: ProductDetails },
    { path: 'checkout', component: Checkout, canActivate: [authGuard] },
    { path: 'orderSuccess', component: Order  },
];
