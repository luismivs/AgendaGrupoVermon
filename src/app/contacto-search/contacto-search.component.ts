import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contacto-search',
  templateUrl: './contacto-search.component.html',
  styleUrls: [ './contacto-search.component.css' ]
})
export class ContactoSearchComponent implements OnInit {

  contactos$: Observable<Contacto[]>;
  private searchTerms = new Subject<string>();

  constructor(private contactoService: ContactoService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.contactos$ = this.searchTerms.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.contactoService.searchContactos(term)),
    );
  }
}