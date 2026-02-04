import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
private route = inject(ActivatedRoute);
private productService = inject(ProductService);
product = computed(()=>{
  const id = Number(this.route.snapshot.paramMap.get('id'));
  return this.productService.products().find(p=>p.id===id);
})
}
