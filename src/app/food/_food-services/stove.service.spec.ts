import { TestBed } from '@angular/core/testing';

import { StoveService } from './stove.service';

describe('StoveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoveService = TestBed.get(StoveService);
    expect(service).toBeTruthy();
  });
});
