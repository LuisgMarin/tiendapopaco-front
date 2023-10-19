import { Injectable } from '@angular/core';
import { Offer } from './offer';
import { Offers } from './offer-data';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor() { }
  getOffers(): Offer[] {
    return Offers;
  }
}
