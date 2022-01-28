import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePlateComponent } from './save-plate.component';

describe('SavePlateComponent', () => {
  let component: SavePlateComponent;
  let fixture: ComponentFixture<SavePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
