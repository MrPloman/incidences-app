import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFlatComponent } from './show.component';

describe('ShowFlatComponent', () => {
  let component: ShowFlatComponent;
  let fixture: ComponentFixture<ShowFlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFlatComponent],
    });
    fixture = TestBed.createComponent(ShowFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
