import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JokeService } from './joke.service';

describe('JokeService', () => {

  // Define variables for this spec file
  let service: JokeService;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JokeService);
  });

  it('should be created', () => {
    // Assert that the service instance was successfully created
    expect(service).toBeTruthy();
  });
});
