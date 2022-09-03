import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExEventComponentComponent } from './ex-event-component.component';

describe('ExEventComponentComponent', () => {
  let component: ExEventComponentComponent;
  let fixture: ComponentFixture<ExEventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExEventComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
