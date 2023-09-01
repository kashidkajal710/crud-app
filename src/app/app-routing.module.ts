import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { Product1Component } from './product1/product1.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './update/update.component';
import { authGuard } from './auth.guard';
import { productguardGuard } from './productguard.guard';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent,canDeactivate:[productguardGuard]},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'product1',component:Product1Component,canDeactivate:[productguardGuard],children:[
    {path:'product',component:ProductComponent},
    {path:'product-list',component:ProductListComponent},
    {path:'update/:id',component:UpdateComponent}
  ]},
  // {path:'header',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
