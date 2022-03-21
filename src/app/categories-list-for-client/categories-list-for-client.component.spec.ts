import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListForClientComponent } from './categories-list-for-client.component';

describe('CategoriesListForClientComponent', () => {
  let component: CategoriesListForClientComponent;
  let fixture: ComponentFixture<CategoriesListForClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesListForClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListForClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
