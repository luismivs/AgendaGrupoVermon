import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ContactosComponent } from './contactos/contactos.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { ContactoDetalleComponent } from './contacto-detalle/contacto-detalle.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoAgregarComponent } from './contacto-agregar/contacto-agregar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoSearchComponent } from './contacto-search/contacto-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContactoDetalleComponent,
    ContactoAgregarComponent,
    ContactoSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
