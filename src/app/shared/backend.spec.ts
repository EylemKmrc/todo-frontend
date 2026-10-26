import { TestBed } from '@angular/core/testing';

import { BackendSevice } from './backend.sevice';

describe('BackendSevice', () => {
  let service: BackendSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
