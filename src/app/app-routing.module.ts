import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OfferComponent } from './components/offer/offer.component';
import { ListOffersAdminComponent } from './components/offerManagement/list-offers-admin/list-offers-admin.component';
import { OfferUpdateComponent } from './components/offerManagement/offer-update/offer-update.component';
import { AddOfferComponent } from './components/offerManagement/add-offer/add-offer.component';
import { ListProductsAdminComponent } from './components/productManagement/list-products-admin/list-products-admin.component';
import { ProductUpdateComponent } from './components/productManagement/product-update/product-update.component';
import { AddProductComponent } from './components/productManagement/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: '', component: RegistrationComponent },
  { path: '', component: ProductsComponent },
  { path: '', component: ProductDetailComponent },
  { path: '', component: CategoriesComponent },
  { path: '', component: ShoppingCartComponent },
  { path: '', component: OfferComponent },
  { path: '', component: ListOffersAdminComponent },
  { path: '', component: OfferUpdateComponent },
  { path: '', component: AddOfferComponent },
  { path: '', component: ListProductsAdminComponent },
  { path: '', component: ProductUpdateComponent },
  { path: '', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
