import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCart } from './shopping-cart';
import { ShoppingCartService } from './shopping-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ItemCarrito } from 'src/app/models/itemCarrito';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnInit {
  products!: ShoppingCart[];
  listaItemsCarrito: ItemCarrito[] = [];

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
    'cantidad',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.listaItemsCarrito = this.shoppingCartService.getProducts();
    console.log(this.listaItemsCarrito);
    this.dataSource = new MatTableDataSource(this.listaItemsCarrito);
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
