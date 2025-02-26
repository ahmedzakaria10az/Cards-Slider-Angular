import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MasterproductsComponent } from './components/masterproducts/masterproducts.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { TempalateDerivenFormcomponent } from './components/forms/template-deriven-form/template-deriven-form.component';
import { ProductDetailsComponent } from './components/productDetails/product-details/product-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'products',component:MasterproductsComponent},
    {path:'slider',component:SliderComponent},
    {path:'about',component:AboutComponent},
    {path:'products/:id', component:ProductDetailsComponent},
    {path:'template', component:TempalateDerivenFormcomponent},
    {path:"**",component:ErrorComponent}

];
