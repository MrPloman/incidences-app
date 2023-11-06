import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlatComponent } from './create.component';

describe('CreateFlatComponent', () => {
  let component: CreateFlatComponent;
  let fixture: ComponentFixture<CreateFlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFlatComponent],
    });
    fixture = TestBed.CreateFlatComponent(CreateFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
