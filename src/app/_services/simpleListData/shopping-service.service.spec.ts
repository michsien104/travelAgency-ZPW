import { TestBed } from '@angular/core/testing';

import { ShoppingServiceService } from './shopping-service.service';

describe('ShoppingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingServiceService = TestBed.get(ShoppingServiceService);
    expect(service).toBeTruthy();
  });
});
