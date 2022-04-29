import { BasicInfoService } from './../../shared/Service/basic-info.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Injector } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Cliente } from '../form-client/shared/cliente.model';
import { FormClientComponent } from './form-client.component';
import { ClientStorageService } from './shared/client-storage.service';

describe(FormClientComponent.name, () => {
  let component: FormClientComponent;
  let fixture: ComponentFixture<FormClientComponent>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;
  const proponente: Cliente = {
    nome: '',
    trabalho: '',
    cpf: '',
    email: '',
    birth: '',
    cep: '',
    celular: '',
  };

  let mockClientStorage = jasmine.createSpyObj('ClientStorageService', [
    'setClient',
  ]);

  const client = {
    id: 1,
    nome: 'Fulano',
    trabalho: 'Carteiro',
    cpf: '111111111111',
    email: 'fulano@fulano.com',
    birth: 20050222,
    cep: 541256325,
    celular: 555555555,
  };

  beforeEach(() => {
    locationSpy = jasmine.createSpyObj<Location>('Location', ['path']);
    routerSpy = jasmine.createSpyObj<Router>('Router', ['routerState']);

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormClientComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        BasicInfoService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: Router, useValue: routerSpy },
        { provide: Cliente, useValue: proponente },
        FormBuilder,
      ],
    });
    fixture = TestBed.createComponent(FormClientComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`modelo has default value`, () => {
    expect(component.modelo).toEqual(Cliente);
  });

  xit(`client() has default value`, () => {
    expect(component.client()).toEqual(component.client());
  });

  it(`ThisBotaoSalvar() has default value`, () => {
    //Preparação
    locationSpy.path.and.returnValue('/form-client');

    //Teste
    let retorno = component.botaoSalvar();

    //Verificação
    expect(component.enviarForm).toBeTrue();
    expect(component.rota).toEqual('/form-imovel');
    expect(retorno).toEqual('/form-imovel');
  });

  it(`ThisBotaoSalvar() has default value`, () => {
    //Preparação
    locationSpy.path.and.returnValue('teste');

    //Teste
    let retorno = component.botaoSalvar();

    //Verificação
    expect(component.enviarForm).toBeTrue();
    expect(component.rota).toEqual('');
    expect(retorno).toEqual('');
  });

  it('makes expected calls', () => {
    spyOn(component, 'imprimeTitulo').and.callThrough();
    component.ngOnInit();
    expect(component.imprimeTitulo).toHaveBeenCalled();
  });

  it(`#${FormClientComponent.prototype.botaoSalvar.name}
    makes expected calls`, () => {
    const locationStub: Location = fixture.debugElement.injector.get(Location);

    spyOn(component, 'botaoSalvar').and.callThrough();
    component.botaoSalvar();
    component.rota = '';
    fixture.detectChanges();
    component.rota = '';
    expect(locationStub.path).toHaveBeenCalled();
  });

  it(`#${FormClientComponent.prototype.criaRotaImovel.name}
    Should create rotaImovel`, () => {
    spyOn(component, 'criaRotaImovel').and.callThrough();
    component.criaRotaImovel();
    component.rota = '';
    fixture.detectChanges();
    expect(component.criaRotaImovel).toBeTruthy();
  });

  it(`#${FormClientComponent.prototype.criaRotaImovel.name}
    Should create rotaImovel`, () => {
    spyOn(component, 'criaRotaImovel').and.callThrough();
    component.criaRotaImovel();
    component.rota = '';
    fixture.detectChanges();
    expect(component.criaRotaImovel).toBeTruthy();
  });
});
