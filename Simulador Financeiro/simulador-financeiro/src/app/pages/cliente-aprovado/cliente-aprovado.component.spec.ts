import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAprovadoComponent } from './cliente-aprovado.component';

describe('ClienteAprovadoComponent', () => {
  let component: ClienteAprovadoComponent;
  let fixture: ComponentFixture<ClienteAprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
