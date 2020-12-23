import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactoAgregarComponent } from './contacto-agregar/contacto-agregar.component';
import { ContactoDetalleComponent } from './contacto-detalle/contacto-detalle.component';

const routes: Routes = [
  { path: 'contactos', component: ContactosComponent },
  { path: 'contacto-agregar', component: ContactoAgregarComponent },
  { path: 'contacto-detalle/:id', component: ContactoDetalleComponent },
  { path: '', redirectTo: '/contactos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }