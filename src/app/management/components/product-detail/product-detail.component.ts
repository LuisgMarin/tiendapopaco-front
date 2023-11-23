import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCarrito } from 'src/app/models/itemCarrito';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  id!: number;
  producto!: Producto;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['idproducto'];

    this.productoService.find(this.id).subscribe((data: Producto) => {
      this.producto = data;
    });
  }

  agregarCarrito(producto: Producto) {
    console.log(producto);
    let iCarrito: ItemCarrito = {
      idproducto: producto.idproducto,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      img: producto.img,
      precio: producto.precio,
      cantidad: 1,
    };

    let carrito: ItemCarrito[] = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito.push(iCarrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
}
