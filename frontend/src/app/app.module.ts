import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    SellComponent,
    BuyComponent,
    ProfileComponent,
    ProductDetailsComponent,
    SellerDetailsComponent
  ],

  // * 1. To use ngForm, add FormModule -> go to login/component.ts
  // * HttpClientModule is used to make http request
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
