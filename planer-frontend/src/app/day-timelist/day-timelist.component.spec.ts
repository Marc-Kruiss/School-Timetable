import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTimelistComponent } from './day-timelist.component';

describe('DayTimelistComponent', () => {
  let component: DayTimelistComponent;
  let fixture: ComponentFixture<DayTimelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayTimelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTimelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
