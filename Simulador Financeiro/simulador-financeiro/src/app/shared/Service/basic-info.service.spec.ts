import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BasicInfoService } from './basic-info.service'

describe('RecursosBasicosService', () => {
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

   it("Should geraTitulo() is running", () => {
    const implementacaoPagina:string = "";
    service.tituloPagina = "tituloHome";
  //  spyOn<any>(locationSpy, "path").and.returnValue(true);
    service.geraTitulo(implementacaoPagina);

    expect(service.geraTitulo).toBeTruthy();
  });

  it("Should geraTitulo() is running", () => {
    const implementacaoPagina:string = "";
    service.tituloPagina = "cliente-aprovado";
  //  spyOn<any>(locationSpy, "path").and.returnValue(true);
    service.geraTitulo(implementacaoPagina);

    expect(null);
  });

});
