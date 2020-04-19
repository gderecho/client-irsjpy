import { TestBed } from '@angular/core/testing';

import { ForminfoService } from './forminfo.service';

describe('ForminfoService', () => {
  let service: ForminfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForminfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
