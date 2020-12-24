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

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.contactoService.getContactos().subscribe(contactos => this.contactos = contactos);
  }

  delete(contacto: Contacto): void {
    this.contactos = this.contactos.filter(h => h !== contacto);
    this.contactoService.deleteContacto(contacto).subscribe();
  }

}
