import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientStorageService {
  client!: Cliente

  constructor() { }

  setClient(client: Cliente){
    this.client = client
  }
  getClient(): Cliente{
    return this.client
  }
}
