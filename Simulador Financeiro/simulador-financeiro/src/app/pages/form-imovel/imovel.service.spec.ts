import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Imovel } from './shared/imovel.model';
import { ImovelService } from './imovel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ImovelStorageService', () => {
  let fixture: ComponentFixture<ImovelService>;
  let service: ImovelService;
  let setImovelSpy: jasmine.SpyObj<ImovelService>;
  let httpMock: jasmine.SpyObj<HttpClient>;
  let imovel: Imovel;
  let http: HttpClientTestingModule;

  const mockModel = {
    tipo: 'comercial'
  }

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('HttpClient', ['post']);

    TestBed.configureTestingModule({
      providers: [
        ImovelService,
        [{ provide: HttpClient, useValue: httpMock }],
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(ImovelService);
    http = TestBed.inject(ImovelService);
  });

  it(`#${ImovelService.prototype.getImovel.name}
    Should return Imovel when called`, () => {
    const mockImovel = new Imovel('comercial');
    expect(mockImovel.tipo).toEqual('comercial');
  });


});
