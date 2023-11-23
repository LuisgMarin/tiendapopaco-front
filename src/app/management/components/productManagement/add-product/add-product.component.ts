import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public productoService: ProductoService,
    public mediaService: MediaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      img: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  upload(event: any) {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.mediaService.uploadFile(formData).subscribe((response) => {
        console.log('response', response);
        const imgControl = this.form.get('img');
        if (imgControl) {
          imgControl.setValue(response.url);
        } else {
          console.error('No se encontró el control img en el formulario');
        }
      });
    }
  }

  submit(){
    console.log(this.form.value);
    this.productoService.create(this.form.value).subscribe(
      (res:any) => {
        console.log('Producto created successfully!');
        Swal.fire({
          icon: 'success',
          title: 'Creación exitosa',
          text: '¡El producto ha sido creado con éxito!',
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
