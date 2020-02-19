import { TestBed } from '@angular/core/testing';

import { PotatoService } from './potato.service';

describe('PotatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotatoService = TestBed.get(PotatoService);
    expect(service).toBeTruthy();
  });
});
