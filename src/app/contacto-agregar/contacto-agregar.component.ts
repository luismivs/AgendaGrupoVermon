import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contacto-agregar',
  templateUrl: './contacto-agregar.component.html',
  styleUrls: ['./contacto-agregar.component.css']
})
export class ContactoAgregarComponent implements OnInit {

  contactos: Contacto[];

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.contactoService.getContactos().subscribe(contactos => this.contactos = contactos);
  }

  add(id: number, nombre: string, apellido1: string, apellido2: string, telefono: string, direccion: string, fecha_nacimiento: string, tecnologias: string): void {
    
    nombre = nombre.trim();
    apellido1 = apellido1.trim();
    apellido2 = apellido2.trim();
    telefono = telefono.trim();
    direccion = direccion.trim();
    fecha_nacimiento = fecha_nacimiento.trim();
    tecnologias = tecnologias.trim();

    if (!id || !nombre || !apellido1 || !apellido2 || !telefono || !direccion || !fecha_nacimiento) { return; }
    this.contactoService.addContacto({ id, nombre, apellido1, apellido2, telefono, direccion, fecha_nacimiento, tecnologias } as Contacto)
      .subscribe(contacto => {
        this.contactos.push(contacto);
      });
  }

}
