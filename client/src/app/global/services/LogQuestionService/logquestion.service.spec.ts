import { TestBed } from '@angular/core/testing';

import { LogquestionService } from './logquestion.service';

describe('LogquestionService', () => {
  let service: LogquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
