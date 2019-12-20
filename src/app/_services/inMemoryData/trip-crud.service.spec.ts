import { TestBed } from '@angular/core/testing';

import { TripCRUDService } from './trip-crud.service';

describe('TripCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripCRUDService = TestBed.get(TripCRUDService);
    expect(service).toBeTruthy();
  });
});
