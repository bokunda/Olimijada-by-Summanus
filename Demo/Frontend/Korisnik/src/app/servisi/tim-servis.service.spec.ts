import { TestBed, inject } from '@angular/core/testing';

import { TimServisService } from './tim-servis.service';

describe('TimServisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimServisService]
    });
  });

  it('should be created', inject([TimServisService], (service: TimServisService) => {
    expect(service).toBeTruthy();
  }));
});
