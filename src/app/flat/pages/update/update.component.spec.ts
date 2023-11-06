import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlatComponent } from './update.component';

describe('UpdateFlatComponent', () => {
  let component: UpdateFlatComponent;
  let fixture: ComponentFixture<UpdateFlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFlatComponent],
    });
    fixture = TestBed.CreateFlatComponent(UpdateFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
