import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasRole } from '../auth/guards/has-role.guard';
import { HomeComponent } from './components/home/home.component';
import { ManagementLayoutComponent } from './components/management-layout/management-layout.component';

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
        canMatch: [hasRole([1])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Orders', 'Manager'],
        // },
        loadChildren: () =>
          import('./components/shopping-cart/shopping-cart.component').then((m) => m.ShoppingCartComponent),
      },
      {
        path: 'listProductsAdmin',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Orders', 'Manager'],
        // },
        loadChildren: () =>
          import('./components/productManagement/list-products-admin/list-products-admin.component').then((m) => m.ListProductsAdminComponent),
      },
      {
        path: 'productUpdate',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Orders', 'Manager'],
        // },
        loadChildren: () =>
          import('./components/productManagement/product-update/product-update.component').then((m) => m.ProductUpdateComponent),
      },
      {
        path: 'addProduct',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Orders', 'Manager'],
        // },
        loadChildren: () =>
          import('./components/productManagement/add-product/add-product.component').then((m) => m.AddProductComponent),
      },
      {
        path: 'listOffersAdmin',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Orders', 'Manager'],
        // },
        loadChildren: () =>
          import('./components/offerManagement/list-offers-admin/list-offers-admin.component').then((m) => m.ListOffersAdminComponent),
      },
      {
        path: 'offerUpdate',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Orders', 'Manager'],
        // },
        loadChildren: () =>
          import('./components/offerManagement/offer-update/offer-update.component').then((m) => m.OfferUpdateComponent),
      },
      {
        path: 'addOffer',
        canActivate: [hasRole([2])],
        canMatch: [hasRole([2])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Orders', 'Manager'],
        // },
        loadChildren: () =>
          import('./components/offerManagement/add-offer/add-offer.component').then((m) => m.AddOfferComponent),
      },
      /*{
        path: 'products-detail',
        canActivate: [hasRole(['Inventory', 'Manager'])],
        canLoad: [hasRole(['Inventory', 'Manager'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Inventory', 'Manager'],
        // },
        loadChildren: () =>
          import('./inventory/inventory.module').then((m) => m.InventoryModule),
      },
      {
        path: 'accounting',
        canActivate: [hasRole(['Accounting', 'Manager'])],
        canLoad: [hasRole(['Accounting', 'Manager'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Accounting', 'Manager'],
        // },
        loadChildren: () =>
          import('./accounting/accounting.module').then(
            (m) => m.AccountingModule
          ),
      },*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }
