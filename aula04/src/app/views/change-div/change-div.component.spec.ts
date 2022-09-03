import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDivComponent } from './change-div.component';

describe('ChangeDivComponent', () => {
  let component: ChangeDivComponent;
  let fixture: ComponentFixture<ChangeDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
