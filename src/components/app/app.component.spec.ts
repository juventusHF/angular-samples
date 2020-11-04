import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  // Define variables for this spec file
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the AppComponent for each test
    fixture = TestBed.createComponent(AppComponent);
    // Get the instance of the AppComponent for each test
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    // Assert that the component instance was successfully created
    expect(app).toBeTruthy();
  });

});
