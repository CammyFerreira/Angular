import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTextComponent } from './change-text.component';

describe('ChangeTextComponent', () => {
  let component: ChangeTextComponent;
  let fixture: ComponentFixture<ChangeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
