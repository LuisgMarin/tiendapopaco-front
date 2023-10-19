import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart';
import { Products } from './shopping-cart-data';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
  getProducts(): ShoppingCart[] {
    return Products;
  }
}
