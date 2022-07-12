import { TestBed } from '@angular/core/testing';

import { ApiDigimonsService } from './api-digimons.service';

describe('ApiDigimonsService', () => {
  let service: ApiDigimonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDigimonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
