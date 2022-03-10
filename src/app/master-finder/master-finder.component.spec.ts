import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFinderComponent } from './master-finder.component';

describe('MasterFinderComponent', () => {
  let component: MasterFinderComponent;
  let fixture: ComponentFixture<MasterFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
