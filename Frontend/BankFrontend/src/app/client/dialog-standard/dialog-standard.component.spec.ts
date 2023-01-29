import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStandardComponent } from './dialog-standard.component';

describe('DialogStandardComponent', () => {
  let component: DialogStandardComponent;
  let fixture: ComponentFixture<DialogStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
