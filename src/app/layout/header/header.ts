import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
private cart = inject(CartService);
auth = inject(AuthService)
cartCount = this.cart.cartCount;
}
