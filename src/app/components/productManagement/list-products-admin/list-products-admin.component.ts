import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingCart } from '../../shopping-cart/shopping-cart';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products-admin',
  templateUrl: './list-products-admin.component.html',
  styleUrls: ['./list-products-admin.component.css']
})
export class ListProductsAdminComponent implements OnInit {
  products!: ShoppingCart[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private _dialog: MatDialog,
    private router: Router) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  displayedColumns: string[] = [
    'nombre',
    'img',
    'descripcion',
    'precio',
    'descuento',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
  delete() {
    alert("Producto eliminado")
  }

}
