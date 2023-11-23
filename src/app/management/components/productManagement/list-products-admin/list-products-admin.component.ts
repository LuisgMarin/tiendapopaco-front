import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingCart } from '../../shopping-cart/shopping-cart';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { forkJoin, map, of } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products-admin',
  templateUrl: './list-products-admin.component.html',
  styleUrls: ['./list-products-admin.component.css']
})
export class ListProductsAdminComponent implements OnInit {
  products: Producto[] = [];
  loading = false;

  constructor(
    private productoService: ProductoService,
    private _dialog: MatDialog,
    private router: Router) {}

  ngOnInit(): void {
    this.productoService.getAll().subscribe((productos: Producto[]) => {
      this.products = productos;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = [
    'idproducto',
    'nombre',
    'img',
    'descripcion',
    'precio',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(idproducto:number){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.delete(idproducto).subscribe(res => {
          this.products = this.products.filter(item => item.idproducto !== idproducto);
          Swal.fire(
            'Eliminado!',
            'El producto ha sido eliminado.',
            'success'
          );
        })
      }
    })
  }

}
