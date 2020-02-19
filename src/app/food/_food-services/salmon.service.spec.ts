import { TestBed } from '@angular/core/testing';

import { SalmonService } from './salmon.service';

describe('SalmonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalmonService = TestBed.get(SalmonService);
    expect(service).toBeTruthy();
  });
});
