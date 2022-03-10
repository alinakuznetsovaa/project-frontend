import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoursListComponent } from './favours-list.component';

describe('FavoursListComponent', () => {
  let component: FavoursListComponent;
  let fixture: ComponentFixture<FavoursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoursListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
