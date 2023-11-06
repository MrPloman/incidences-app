import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.CreateFlatComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rating-flats'`, () => {
    const fixture = TestBed.CreateFlatComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rating-flats');
  });

  it('should render title', () => {
    const fixture = TestBed.CreateFlatComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'rating-flats app is running!'
    );
  });
});
