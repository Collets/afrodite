import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurprisePopupComponent } from './surprise-popup.component';

describe('SurprisePopupComponent', () => {
  let component: SurprisePopupComponent;
  let fixture: ComponentFixture<SurprisePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurprisePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurprisePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
