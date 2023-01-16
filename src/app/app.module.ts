import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsListModule } from './components/products-list/products-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Ang modules
    BrowserModule,
    ReactiveFormsModule,
    
    // Custom modules
    ProductsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
