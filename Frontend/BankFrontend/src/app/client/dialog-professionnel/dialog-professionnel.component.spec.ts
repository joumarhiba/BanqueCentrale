import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProfessionnelComponent } from './dialog-professionnel.component';

describe('DialogProfessionnelComponent', () => {
  let component: DialogProfessionnelComponent;
  let fixture: ComponentFixture<DialogProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProfessionnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
