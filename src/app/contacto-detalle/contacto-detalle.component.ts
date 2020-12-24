import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactoService } from '../contacto.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-contacto-detalle',
  templateUrl: './contacto-detalle.component.html',
  styleUrls: ['./contacto-detalle.component.css']
})
export class ContactoDetalleComponent implements OnInit {

  @Input() contacto: Contacto;

  constructor(private route: ActivatedRoute, private contactoService: ContactoService, private location: Location) { }

  ngOnInit(): void {
    this.getContacto();
  }
  
  getContacto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactoService.getContacto(id)
      .subscribe(contacto => this.contacto = contacto);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactoService.updateContacto(this.contacto, id)
      .subscribe(() => this.goBack());
      
    Swal.fire(
      'Contacto actualizado',
      'El contacto se actualizó correctamente',
      'success'
    )  
  }

  tecInfo(): void {
    Swal.fire(
      'Tecnologías disponibles',
      'PHP, JavaScript, TypeScript, HTML, CSS, Python, NodeJS, Java, ASP, .NET'
    )
  }
}
