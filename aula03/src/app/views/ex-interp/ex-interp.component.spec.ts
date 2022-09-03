import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExInterpComponent } from './ex-interp.component';

describe('ExInterpComponent', () => {
  let component: ExInterpComponent;
  let fixture: ComponentFixture<ExInterpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExInterpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExInterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
