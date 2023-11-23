import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, finalize } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginCredentials } from '../model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  processingRequest = false;

  form = new FormGroup({
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

  login() {
    this.processingRequest = true;

    this.authService
      .login(this.form.value as LoginCredentials)
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
      .subscribe();
  }

  handleUnauthorized() {
    this.form.setErrors({ invalidCredentials: true });
    this.cdr.markForCheck();
  }
}
