import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ShoppingCart } from '../../shopping-cart/shopping-cart';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { OfferService } from './offer.service';
import { Offer } from './offer';

@Component({
  selector: 'app-list-offers-admin',
  templateUrl: './list-offers-admin.component.html',
  styleUrls: ['./list-offers-admin.component.css'],
})
export class ListOffersAdminComponent implements OnInit {
  offer!: Offer[];

  constructor(
    private offerService: OfferService,
    private _dialog: MatDialog,
    private router: Router) {}

  ngOnInit(): void {
    this.getOffersList();
  }

  displayedColumns: string[] = [
    'nombre',
    'idProduct',
    'descuento',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getOffersList() {
    this.dataSource = new MatTableDataSource(this.offer = this.offerService.getOffers());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete() {
    alert("Oferta eliminada")
  }
}
