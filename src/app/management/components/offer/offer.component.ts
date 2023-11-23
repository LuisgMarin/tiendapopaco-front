import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../shopping-cart/shopping-cart';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  products!: ShoppingCart[];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
  }
}


