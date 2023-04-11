import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingComponent } from './shopping/shopping.component'
import { HttpClientModule } from "@angular/common/http";
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DialogModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent },
      {path: "products/:productId", component: ProductDetailsComponent},
      {path: "cart", component: CartComponent},
      {path: "shopping", component: ShoppingComponent},
      {path: 'admin', component:ProductAdminComponent},
      
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductComponent,
    ProductAlertsComponent,
    CartComponent,
    ProductDetailsComponent,
    ShoppingComponent,
    ProductAdminComponent, 
    
    
  ],
  providers: [ConfirmationService],
  bootstrap: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/