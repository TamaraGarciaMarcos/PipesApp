import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';

//configuracion del locale de la app
import  localeEsHN  from '@angular/common/locales/es-HN';
import  localeFrCA  from '@angular/common/locales/fr-CA';

import  { registerLocaleData }  from '@angular/common';
registerLocaleData(localeEsHN)
registerLocaleData(localeFrCA)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    ProductsModule,

  ],
  //los providers son como los servicios
  providers: [
    {provide: LOCALE_ID, useValue: 'es-HN'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
