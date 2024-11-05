//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //let component: AppComponent;
  //let fixture: ComponentFixture<AppComponent>;
  //let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
      //imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pocadintegration.client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pocadintegration.client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pocadintegration.client app is running!');
  });
  //beforeEach(() => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  cinst component = fixture.componentInstance;
  //  httpMock = TestBed.inject(HttpTestingController);
  //});

  //afterEach(() => {
  //  httpMock.verify();
  //});

  //it('should create the app', () => {
  //  expect(component).toBeTruthy();
  //});

  //it('should retrieve weather forecasts from the server', () => {
  //  const mockForecasts = [
  //    { date: '2021-10-01', temperatureC: 20, temperatureF: 68, summary: 'Mild' },
  //    { date: '2021-10-02', temperatureC: 25, temperatureF: 77, summary: 'Warm' }
  //  ];

  //  component.ngOnInit();

  //  const req = httpMock.expectOne('/weatherforecast');
  //  expect(req.request.method).toEqual('GET');
  //  req.flush(mockForecasts);

  //  expect(component.forecasts).toEqual(mockForecasts);
  //});
});
