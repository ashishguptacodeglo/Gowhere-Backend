import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatComponent } from './sales-stat.component';

describe('SalesStatComponent', () => {
  let component: SalesStatComponent;
  let fixture: ComponentFixture<SalesStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
