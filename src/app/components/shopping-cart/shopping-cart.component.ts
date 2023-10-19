import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCart } from './shopping-cart';
import { ShoppingCartService } from './shopping-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  products!: ShoppingCart[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private _dialog: MatDialog,
    private router: Router
  ) {}

  displayedColumns: string[] = [
    'nombre',
    'img',
    'descripcion',
    'precio',
    'descuento',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getProductsList();
    console.log(this.products = this.shoppingCartService.getProducts());

  }

  getProductsList() {
    this.dataSource = new MatTableDataSource(this.products = this.shoppingCartService.getProducts());
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
}
