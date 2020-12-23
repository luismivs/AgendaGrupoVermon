import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
 
  contactos: Contacto[];
  //selectedContacto: Contacto;

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.getContactos();
  }


  //onSelect(contacto: Contacto): void {
  //  this.selectedContacto = contacto;
  //}

  getContactos(): void {
    this.contactoService.getContactos().subscribe(contactos => this.contactos = contactos);
  }

}
