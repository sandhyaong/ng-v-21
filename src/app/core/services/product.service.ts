import { Injectable, signal } from "@angular/core";

export interface Product {
    id: number;
    Title: string;
    price: number;
    image: string;
    description: string;
}
@Injectable({
    providedIn: 'root'
})
export class ProductService {   
     products = signal<Product[]>([
        { id: 1, Title: 'Product 1', price: 100, image: 'book1.jpg', description: 'High quality book for learning.'},
        { id: 2, Title: 'Product 2', price: 200, image: 'book2.jpg', description: 'Advanced knowledge book.' },
        { id: 3, Title: 'Product 3', price: 300, image: 'book1.jpg', description: 'Advanced & High Quality knowledge book.'},
    ]);
}