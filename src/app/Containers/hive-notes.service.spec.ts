import { TestBed } from '@angular/core/testing';

import { HiveNotesService } from './hive-notes.service';

describe('HiveNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HiveNotesService = TestBed.get(HiveNotesService);
    expect(service).toBeTruthy();
  });
});
