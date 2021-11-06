import { TestBed } from '@angular/core/testing';

import { MovieDataServiceService } from './movie-data-service.service';

describe('MovieDataServiceService', () => {
  let service: MovieDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
