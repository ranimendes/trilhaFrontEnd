import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BasicInfoService } from './basic-info.service'

describe('BasicInfo', () => {
  //Segundo - Declara variaveis que foram ciradas nos providers criando spy let injectorSpy: jasmine.SpyObj<Injector>;
  let service: BasicInfoService;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;
  let tituloPagina: BasicInfoService;
  let tituloPaginaMock: jasmine.SpyObj<any>
  beforeEach(() => {
    //Terceiro - Criar um spy Objeto |
    locationSpy = jasmine.createSpyObj<Location>("Location", ["path"]);
    TestBed.configureTestingModule({
      providers: [
        //Primeiro adicionar declarações no construtor e injeta em providers no spec
        BasicInfoService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    service = TestBed.inject(BasicInfoService);
  });

   it("Should geraTitulo() Home is running", () => {
    //Preparação
    locationSpy.path.and.returnValue("");

    //Teste
    service.geraTitulo("teste");

    //Verificação
    expect(service.tituloPagina).toEqual("teste");
  });

  it("Should geraTitulo() form-client is running", () => {
    //Preparação
    locationSpy.path.and.returnValue("/form-client");

    //Teste
    service.geraTitulo("teste");

    //Verificação
    expect(service.tituloPagina).toEqual("teste");
  });

  it("Should geraTitulo() form-imovel is running", () => {
    //Preparação
    locationSpy.path.and.returnValue("/form-imovel");

    //Teste
    service.geraTitulo("teste");

    //Verificação
    expect(service.tituloPagina).toEqual("teste");
  });

  it("Should geraTitulo() cliente-aprovado is running", () => {
    //Preparação
    locationSpy.path.and.returnValue("/cliente-aprovado");

    //Teste
    service.geraTitulo("teste");

    //Verificação
    expect(service.tituloPagina).toEqual("teste");
  });

  it("Should geraTitulo() cliente-reprovado is running", () => {
    //Preparação
    locationSpy.path.and.returnValue("/cliente-reprovado");

    //Teste
    service.geraTitulo("teste");

    //Verificação
    expect(service.tituloPagina).toEqual("teste");
  });

});
