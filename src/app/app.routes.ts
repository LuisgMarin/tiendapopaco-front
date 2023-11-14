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


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products-detail', component: ProductDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'listOffersAdmin', component: ListOffersAdminComponent },
  { path: 'offerUpdate', component: OfferUpdateComponent },
  { path: 'addOffer', component: AddOfferComponent },
  { path: 'listProductsAdmin', component: ListProductsAdminComponent },
  { path: 'productUpdate', component: ProductUpdateComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
