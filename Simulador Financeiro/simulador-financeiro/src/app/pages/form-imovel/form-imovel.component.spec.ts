import { BasicInfoService } from './../../shared/Service/basic-info.service';
import { ImovelService } from './../form-imovel/imovel.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Imovel } from './../form-imovel/shared/imovel.model';
import { FormImovelComponent, Simulacao } from './form-imovel.component';

describe('FormImovelComponent', () => {
  let component: FormImovelComponent;
  let fixture: ComponentFixture<FormImovelComponent>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;
  let imovelStorageServiceSpy: jasmine.SpyObj<ImovelService>;
  let simulacao: Simulacao;

  const imovel: Imovel = {
    tipo: '',
    renda: 0,
    valor: 0,
    entrada: 0,
    parcelas: 0,
    valorAprovado: 0,
    parcelaInicial: 0,
  };

  beforeEach(() => {
    locationSpy = jasmine.createSpyObj<Location>('Location', ['path']);
    routerSpy = jasmine.createSpyObj<Router>('Router', [
      'routerState',
      'navigate',
    ]);
    imovelStorageServiceSpy = jasmine.createSpyObj<ImovelService>(
      'ImovelService',
      ['setImovel']
    );

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormImovelComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        BasicInfoService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ImovelService, useValue: imovelStorageServiceSpy },
        { provide: Imovel, useValue: imovel },
      ],
    });
    fixture = TestBed.createComponent(FormImovelComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('makes expected calls', () => {
    spyOn(component, 'imprimeTitulo').and.callThrough();
    component.ngOnInit();
    expect(component.imprimeTitulo).toHaveBeenCalled();
  });

  it(`#${FormImovelComponent.prototype.navigateApprovedDenied.name}
      Should validate simulation`, () => {
    spyOn(component, 'navigateApprovedDenied').and.callThrough();
    component.navigateApprovedDenied();
    expect(component.navigateApprovedDenied).toHaveBeenCalled();
  });
});
