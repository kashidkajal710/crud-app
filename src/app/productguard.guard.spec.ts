import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { productguardGuard } from './productguard.guard';

describe('productguardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => productguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
