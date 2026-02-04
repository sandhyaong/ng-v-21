import { Injectable, signal } from "@angular/core";

export interface Product {
    id: number;
    Title: string;
    price: number;
    image: string;
}
@Injectable({
    providedIn: 'root'
})
export class ProductService {   
     products = signal<Product[]>([
        { id: 1, Title: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
        { id: 2, Title: 'Product 2', price: 200, image: 'https://via.placeholder.com/150' },
        { id: 3, Title: 'Product 3', price: 300, image: 'https://via.placeholder.com/150' },
    ]);

}