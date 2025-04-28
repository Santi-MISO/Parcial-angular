import { TestBed } from '@angular/core/testing';

import { CafeService } from './cafe.service';

import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeService, provideHttpClientTesting()], // <<--- Agregar esto
    });
    service = TestBed.inject(CafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});