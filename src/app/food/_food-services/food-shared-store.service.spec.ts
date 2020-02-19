import { TestBed } from '@angular/core/testing';

import { FoodSharedStoreService } from './food-shared-store.service';

describe('FoodSharedStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodSharedStoreService = TestBed.get(FoodSharedStoreService);
    expect(service).toBeTruthy();
  });
});
