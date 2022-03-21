import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoursListOfCategoryForClientComponent } from './favours-list-of-category-for-client.component';

describe('FavoursListOfCategoryForClientComponent', () => {
  let component: FavoursListOfCategoryForClientComponent;
  let fixture: ComponentFixture<FavoursListOfCategoryForClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoursListOfCategoryForClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoursListOfCategoryForClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
