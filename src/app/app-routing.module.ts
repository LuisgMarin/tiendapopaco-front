import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { IsLoggedInGuard } from './auth/guards/is-logged-in.guard';
import { ProductsComponent } from './management/components/products/products.component';
import { ProductDetailComponent } from './management/components/product-detail/product-detail.component';
import { CategoriesComponent } from './management/components/categories/categories.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './management/components/home/home.component';
import { OfferComponent } from './management/components/offer/offer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent
  },

  { path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'offer',
    component: OfferComponent,
  },
  {
    path: '',
    canLoad: [IsLoggedInGuard],
    loadChildren: () =>
      import('./management/management.module').then((m) => m.ManagementModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
