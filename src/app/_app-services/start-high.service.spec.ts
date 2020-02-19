import { TestBed } from '@angular/core/testing';

import { StartHighService } from './start-high.service';

describe('StartHighService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartHighService = TestBed.get(StartHighService);
    expect(service).toBeTruthy();
  });
});
