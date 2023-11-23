import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{


  id!: number;
  product!: Producto;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public productService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idproducto'];
    this.productService.find(this.id).subscribe((data: Producto)=>{
      console.log(data);
      this.product = data;
      this.form.patchValue({
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
      });
    });

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      precio: new FormControl('', Validators.required),
    });
  }

  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.productService.update(this.form.value).subscribe(
      (res:any) => {
        Swal.fire({
          icon: 'success',
          title: 'Actualización exitosa',
          text: '¡El producto ha sido actualizado con éxito!',
        });
        this.router.navigateByUrl('/listProductsAdmin');
      },
      (error: HttpErrorResponse) => {
        // Manejo de errores
        if (error.status === 400 || error.status === 404) {
          const serverErrorMessage = error.error.message;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Ha ocurrido un error ${error.status}: ${serverErrorMessage}`,
          });
        } else {
          throw error;
        }
      }
    )
  }

}
