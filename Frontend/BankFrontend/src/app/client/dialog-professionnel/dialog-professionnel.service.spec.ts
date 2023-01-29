import { TestBed } from '@angular/core/testing';

import { DialogProfessionnelService } from './dialog-professionnel.service';

describe('DialogProfessionnelService', () => {
  let service: DialogProfessionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogProfessionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
