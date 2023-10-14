import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";

const APP_ROUTES:Routes=[
{path: 'home', component: HomeComponent },
{path: 'login', component: LoginComponent },
{path: 'registration', component: RegistrationComponent },
{path: 'products', component: ProductsComponent },
{path: 'products-detail', component: ProductDetailComponent },
{path: 'categories', component: CategoriesComponent },
{path: 'shopping-cart', component: ShoppingCartComponent },
{path: '**', pathMatch: 'full',redirectTo:'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
