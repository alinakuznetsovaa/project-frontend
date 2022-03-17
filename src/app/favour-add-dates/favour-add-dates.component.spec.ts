import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavourAddDatesComponent } from './favour-add-dates.component';

describe('FavourAddDatesComponent', () => {
  let component: FavourAddDatesComponent;
  let fixture: ComponentFixture<FavourAddDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavourAddDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavourAddDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
