import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Cliente } from "./cliente.model";
import { ClientStorageService } from "./client-storage.service";

describe("ImovelStorageService", () => {
  let fixture: ComponentFixture<ClientStorageService>;
  let service: ClientStorageService;
  let setClientSpy: jasmine.SpyObj<ClientStorageService>;
  let cliente: Cliente;

  const mockClient = {
    id: 1
  }

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ClientStorageService],
     });
    service = TestBed.inject(ClientStorageService);
  });

  it(`#${ClientStorageService.prototype.getClient.name}
    Should return Cliente when called`, () => {
      service.setClient(cliente);
      expect(service.getClient()).toHaveBeenCalled;
  });

  it(`#${ClientStorageService.prototype.getClient.name}
  Client Model`, () => {
   const mockClient = new Cliente(1);
   expect(mockClient.id).toEqual(1);
});
});
