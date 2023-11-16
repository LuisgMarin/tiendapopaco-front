import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLayoutComponent } from './components/management-layout/management-layout.component';
import { UserSelectorComponent } from './components/navbar/user-selector/user-selector.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManagementRoutingModule } from './management-routing.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    ManagementLayoutComponent,
    UserSelectorComponent  ],
  imports: [
    CommonModule, ManagementRoutingModule, AuthModule
  ]
})
export class ManagementModule { }
