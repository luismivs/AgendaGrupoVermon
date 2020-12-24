import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { Tecnologia } from '../tecnologia';
import { ContactoService } from '../contacto.service';
import { Location } from '@angular/common';
import  Swal  from 'sweetalert2';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-contacto-agregar',
  templateUrl: './contacto-agregar.component.html',
  styleUrls: ['./contacto-agregar.component.css']
})
export class ContactoAgregarComponent implements OnInit {

  contactos: Contacto[];
  tecnologias = new FormControl();
  tecnologiasList: string[] = ['PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'NodeJs', 'Java', 'ASP', '.NET']
  //tecnologiasList: Tecnologia[];

  constructor(private contactoService: ContactoService, private location: Location) { }

  ngOnInit(): void {
    this.getContactos();
  }

  /*getTecnologias(): void {
    this.contactoService.getTecnologias().subscribe(tecnologias => this.tecnologiasList = tecnologias);
  }*/

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
    //tecnologias = tecnologias.trim();

    if (!id || !nombre || !apellido1 || !apellido2 || !telefono || !direccion || !fecha_nacimiento) {
      Swal.fire(
        'Error',
        'No se guardo ningún contacto, complete los campos requeridos',
        'error'
      )
      return; }

    this.contactoService.addContacto({ id, nombre, apellido1, apellido2, telefono, direccion, fecha_nacimiento, tecnologias } as Contacto)
      .subscribe(contacto => {
        this.contactos.push(contacto);
      });

    Swal.fire(
      'Contacto guardado',
      'El contacto se guardó correctamente',
      'success'
    )
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  tecInfo(): void {
    Swal.fire(
      'Tecnologías disponibles',
      'PHP, JavaScript, TypeScript, HTML, CSS, Python, NodeJS, Java, ASP, .NET'
    )
  }
}
