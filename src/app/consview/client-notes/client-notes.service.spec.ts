/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientNotesService } from './client-notes.service';

describe('Service: ClientNotes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientNotesService]
    });
  });

  it('should ...', inject([ClientNotesService], (service: ClientNotesService) => {
    expect(service).toBeTruthy();
  }));
});
