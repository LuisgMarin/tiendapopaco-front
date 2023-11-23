import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Registration } from '../model/registration.interface';
import { EMPTY, catchError, finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  processingRequest = false;

  form = new FormGroup({
    nombre: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    apellido: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    usuario: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    contrasena: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    public authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  register() {
    this.processingRequest = true;

    const formValue = this.form.value;
    const registrationData: Registration = {
      nombre: formValue.nombre || '',
      apellido: formValue.apellido || '',
      usuario: formValue.usuario || '',
      contrasena: formValue.contrasena || '',
      rol: 1
    };

    this.authService
      .registration(registrationData as Registration)
      .pipe(
        finalize(() => (this.processingRequest = false)),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.handleUnauthorized();
            return EMPTY;
          }
          if (error.status === 400) {
            const serverErrorMessage = error.error.message;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Ha ocurrido un error ${error.status}: ${serverErrorMessage}`,
            });
            return EMPTY;
          }
          if (error.status === 404) {
            const serverErrorMessage = error.error.message;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Ha ocurrido un error ${error.status}: ${serverErrorMessage}`,
            });
            return EMPTY;
          }
          throw error;
        })
      )
      .subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Tu registro ha sido exitoso!',
        });
      });
  }

  handleUnauthorized() {
    this.form.setErrors({ invalidCredentials: true });
    this.cdr.markForCheck();
  }
}
