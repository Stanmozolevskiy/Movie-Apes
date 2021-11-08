import { TestBed } from '@angular/core/testing';

import { TvShowsDataServiceService } from './tv-shows-data-service.service';

describe('TvShowsDataServiceService', () => {
  let service: TvShowsDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowsDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
