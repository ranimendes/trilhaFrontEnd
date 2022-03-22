import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteReprovadoComponent } from './cliente-reprovado.component';

describe('ClienteReprovadoComponent', () => {
  let component: ClienteReprovadoComponent;
  let fixture: ComponentFixture<ClienteReprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteReprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
