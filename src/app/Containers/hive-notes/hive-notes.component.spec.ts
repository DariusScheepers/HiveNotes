import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveNotesComponent } from './hive-notes.component';

describe('HiveNotesComponent', () => {
  let component: HiveNotesComponent;
  let fixture: ComponentFixture<HiveNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiveNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
