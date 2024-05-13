import { TestBed } from '@angular/core/testing';

import { NoHomeGuard } from './no-home.guard';

describe('NoHomeGuard', () => {
  let guard: NoHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
