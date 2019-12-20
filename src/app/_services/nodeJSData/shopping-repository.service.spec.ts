import { TestBed } from '@angular/core/testing';

import { ShoppingRepositoryService } from './shopping-repository.service';

describe('ShoppingRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingRepositoryService = TestBed.get(ShoppingRepositoryService);
    expect(service).toBeTruthy();
  });
});
