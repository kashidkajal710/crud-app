import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { Product1Component } from './product1/product1.component';
import { UpdateComponent } from './update/update.component';
import { AppInterceptor } from './interceptor/app.interceptor';
import { authGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    HomeComponent,
    Product1Component,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AppInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
