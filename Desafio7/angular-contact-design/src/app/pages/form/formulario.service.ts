import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Formulario } from './form';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {

  showMessage(arg0: string) {

    throw new Error("Method not implemented.");

  }

  baseUrl = 'http://localhost:3000/contact-us';

  constructor(private http: HttpClient) {}

  enviar(formulario: any): Observable<Formulario> {
    console.log('fala alguma coisaaa')
    return this.http.post<Formulario>(this.baseUrl, formulario)
  }
}
