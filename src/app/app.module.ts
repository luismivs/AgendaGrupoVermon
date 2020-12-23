import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ContactosComponent } from './contactos/contactos.component';
import { FormsModule } from '@angular/forms';
import { ContactoDetalleComponent } from './contacto-detalle/contacto-detalle.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoAgregarComponent } from './contacto-agregar/contacto-agregar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContactoDetalleComponent,
    ContactoAgregarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
