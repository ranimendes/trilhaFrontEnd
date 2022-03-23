import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './form-client/shared/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  enviar(client: any): Observable<Cliente> {
    console.log('Serviço respondendo!', client);
    return this.http.post<Cliente>(this.baseUrl, client);
  }
}
