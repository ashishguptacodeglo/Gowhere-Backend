import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabishmentSupportComponent } from './estabishment-support.component';

describe('EstabishmentSupportComponent', () => {
  let component: EstabishmentSupportComponent;
  let fixture: ComponentFixture<EstabishmentSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabishmentSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabishmentSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
