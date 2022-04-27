import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PagesService } from './pages.service';

fdescribe('PagesService', () => {
  let service: PagesService;

   beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
