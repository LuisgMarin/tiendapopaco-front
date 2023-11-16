import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './management/components/navbar/navbar.component';
import { FooterComponent } from './management/components/footer/footer.component';
import { HomeComponent } from './management/components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { CategoriesComponent } from './management/components/categories/categories.component';
import { ProductDetailComponent } from './management/components/product-detail/product-detail.component';
import { ProductsComponent } from './management/components/products/products.component';
import { ShoppingCartComponent } from './management/components/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOptimizedImage } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OfferComponent } from './management/components/offer/offer.component';
import { ListOffersAdminComponent } from './management/components/offerManagement/list-offers-admin/list-offers-admin.component';
import { OfferUpdateComponent } from './management/components/offerManagement/offer-update/offer-update.component';
import { AddOfferComponent } from './management/components/offerManagement/add-offer/add-offer.component';
import { ListProductsAdminComponent } from './management/components/productManagement/list-products-admin/list-products-admin.component';
import { AddProductComponent } from './management/components/productManagement/add-product/add-product.component';
import { ProductUpdateComponent } from './management/components/productManagement/product-update/product-update.component';
import { AuthModule } from './auth/auth.module';
import { authTokeninterceptorProvider } from './auth/interceptors';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    CategoriesComponent,
    ProductDetailComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OfferComponent,
    ListOffersAdminComponent,
    OfferUpdateComponent,
    AddOfferComponent,
    ListProductsAdminComponent,
    AddProductComponent,
    ProductUpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    AuthModule
  ],
  providers: [authTokeninterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
