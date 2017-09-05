import { TestBed, inject } from '@angular/core/testing';

import { FirebaseServiceService } from './firebase-service.service';

describe('FirebaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseServiceService]
    });
  });

  it('should be created', inject([FirebaseServiceService], (service: FirebaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
