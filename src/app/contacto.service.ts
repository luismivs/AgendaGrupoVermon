import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { CONTACTOS } from './mock-contactos';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private contactosUrl = 'http://localhost:3000/contactos';

  constructor(private http: HttpClient) { }

  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.contactosUrl).pipe(
      catchError(this.handleError<Contacto[]>('getContactos',[]))
    );
  }

  getContacto(id: number): Observable<Contacto> {
    const url = `${this.contactosUrl}/${id}`;
    return this.http.get<Contacto>(url).pipe(
      catchError(this.handleError<Contacto>(`getContacto id=${id}`))
    );
  }


  updateContacto(contacto: Contacto, id:number): Observable<any> {
    const url = `${this.contactosUrl}/${id}`;
    return this.http.put(url, contacto, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateContacto'))
    );
  }

  addContacto(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.contactosUrl, contacto, this.httpOptions).pipe(
      catchError(this.handleError<Contacto>('addContacto'))
    );
  }

  deleteContacto(contacto: Contacto | number): Observable<Contacto> {
    const id = typeof contacto === 'number' ? contacto : contacto.id;
    const url = `${this.contactosUrl}/${id}`;

    return this.http.delete<Contacto>(url, this.httpOptions).pipe(
      catchError(this.handleError<Contacto>('deleteContacto'))
    );
  }


  searchContactos(term: string): Observable<Contacto[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Contacto[]>(`${this.contactosUrl}/?nombre=${term}`).pipe(
      catchError(this.handleError<Contacto[]>('searchContactos', []))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
