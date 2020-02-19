import { TestBed } from '@angular/core/testing';
import { UserLowService } from './user.low.service';


describe('UserLowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLowService = TestBed.get(UserLowService);
    expect(service).toBeTruthy();
  });
});
