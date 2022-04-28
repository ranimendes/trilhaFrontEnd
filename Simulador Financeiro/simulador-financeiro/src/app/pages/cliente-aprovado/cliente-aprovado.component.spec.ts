import { BasicInfoService } from 'src/app/shared/Service/basic-info.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ImovelService } from '../form-imovel/imovel.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteAprovadoComponent } from './cliente-aprovado.component';

describe('ClienteAprovadoComponent', () => {
  let component: ClienteAprovadoComponent;
  let fixture: ComponentFixture<ClienteAprovadoComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let imovelStorageServiceSpy = () => ({ getImovel: () => ({}) });

  beforeEach(() => {

    routerSpy = jasmine.createSpyObj<Router>("Router", ["routerState"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ClienteAprovadoComponent],
      providers: [
        BasicInfoService,
        { provide: Router, useValue: routerSpy },
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: ImovelService, useValue: imovelStorageServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(ClienteAprovadoComponent);
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

  it('makes expected calls', () => {
    const imovelStorageServiceStub: ImovelService = fixture.debugElement.injector.get(
      ImovelService
    );
    spyOn(component, 'imprimeTitulo').and.callThrough();
    spyOn(imovelStorageServiceStub, 'getImovel').and.callThrough();
    component.ngOnInit();
    expect(component.imprimeTitulo).toHaveBeenCalled();
    expect(imovelStorageServiceStub.getImovel).toHaveBeenCalled();
  });
});
