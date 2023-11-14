import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowForRolesDirective } from './directives/show-for-roles.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent, ShowForRolesDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginComponent, ShowForRolesDirective],
})
export class AuthModule {}
