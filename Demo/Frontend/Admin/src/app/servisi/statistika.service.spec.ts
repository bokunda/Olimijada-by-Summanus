import { TestBed, inject } from '@angular/core/testing';

import { StatistikaService } from './statistika.service';

describe('StatistikaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatistikaService]
    });
  });

  it('should be created', inject([StatistikaService], (service: StatistikaService) => {
    expect(service).toBeTruthy();
  }));
});
