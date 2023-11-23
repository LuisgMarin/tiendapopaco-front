import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowForRolesDirective } from './directives/show-for-roles.directive';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ShowForRolesDirective],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [LoginComponent, RegistrationComponent, ShowForRolesDirective],
})
export class AuthModule {}
