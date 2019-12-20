import { TestBed } from '@angular/core/testing';

import { TripRepositoryService } from './trip-repository.service';

describe('TripRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripRepositoryService = TestBed.get(TripRepositoryService);
    expect(service).toBeTruthy();
  });
});
