import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddFavoursComponent} from './add-favours.component';

describe('AddFavoursComponent', () => {
  let component: AddFavoursComponent;
  let fixture: ComponentFixture<AddFavoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFavoursComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
