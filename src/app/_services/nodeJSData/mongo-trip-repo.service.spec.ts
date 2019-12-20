import { TestBed } from '@angular/core/testing';

import { MongoTripRepoService } from './mongo-trip-repo.service';

describe('MongoTripRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongoTripRepoService = TestBed.get(MongoTripRepoService);
    expect(service).toBeTruthy();
  });
});
