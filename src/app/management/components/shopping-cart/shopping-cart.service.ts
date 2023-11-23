import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart';
import { Products } from './shopping-cart-data';
import { ItemCarrito } from 'src/app/models/itemCarrito';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  listaItemsCarrito: ItemCarrito[] = [];

  constructor() { }

  getProducts(): ItemCarrito[] {
    let carritoStorage = localStorage.getItem('carrito') as string;
    let carrito = JSON.parse(carritoStorage) as ItemCarrito[];
    return carrito;
  }
}
