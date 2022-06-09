import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFinderComponent } from './client-finder.component';

describe('ClientPageComponent', () => {
  let component: ClientFinderComponent;
  let fixture: ComponentFixture<ClientFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
