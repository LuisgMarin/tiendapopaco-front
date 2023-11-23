import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasRole } from '../auth/guards/has-role.guard';
import { HomeComponent } from './components/home/home.component';
import { ManagementLayoutComponent } from './components/management-layout/management-layout.component';
import { ListProductsAdminModule } from './components/productManagement/list-products-admin/list-products-admin.module';

const routes: Routes = [
  {
    path: '',
    component: ManagementLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'shopping-cart',
        canActivate: [hasRole([1])],
        canLoad: [hasRole([1])],
        loadChildren: () =>
          import('./components/shopping-cart/shopping-cart.module').then(
            (m) => m.ShoppingCartModule
          ),
      },
      {
        path: 'listProductsAdmin',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        loadChildren: () =>
          import(
            './components/productManagement/list-products-admin/list-products-admin.module'
          ).then((m) => m.ListProductsAdminModule),
      },
      {
        path: 'productUpdate/:idproducto',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        loadChildren: () =>
          import(
            './components/productManagement/product-update/product-update.module'
          ).then((m) => m.ProductUpdateModule),
      },
      {
        path: 'addProduct',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        loadChildren: () =>
          import(
            './components/productManagement/add-product/add-product.module'
          ).then((m) => m.AddProductModule),
      },
      {
        path: 'listOffersAdmin',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        loadChildren: () =>
          import(
            './components/offerManagement/list-offers-admin/list-offer-admin.module'
          ).then((m) => m.ListOffersAdminModule),
      },
      {
        path: 'offerUpdate',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        loadChildren: () =>
          import(
            './components/offerManagement/offer-update/offer-update.module'
          ).then((m) => m.OfferUpdateModule),
      },
      {
        path: 'addOffer',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        loadChildren: () =>
          import(
            './components/offerManagement/add-offer/add-offer.module'
          ).then((m) => m.AddOfferModule),
      },
      {
        path: 'products-detail/:idproducto',
        canActivate: [hasRole([1])],
        canMatch: [hasRole([1])],
        loadChildren: () =>
          import(
            './components/product-detail/product-detail.module'
          ).then((m) => m.ProductDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
