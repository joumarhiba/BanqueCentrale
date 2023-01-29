import { TestBed } from '@angular/core/testing';

import { DialogStandardService } from './dialog-standard.service';

describe('DialogStandardService', () => {
  let service: DialogStandardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogStandardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
