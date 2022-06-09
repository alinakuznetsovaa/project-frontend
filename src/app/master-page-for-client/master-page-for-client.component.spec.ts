import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageForClientComponent } from './master-page-for-client.component';

describe('MasterPageForClientComponent', () => {
  let component: MasterPageForClientComponent;
  let fixture: ComponentFixture<MasterPageForClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPageForClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageForClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
