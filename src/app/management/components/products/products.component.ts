import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products: Observable<Producto[]>;


  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
      this.products = this.productoService.getAll();
    };
  }


