import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComponent } from './pipes.component';
import {ExponentialStrengthPipe} from '../../pipes/exponential-strength.pipe';

describe('PipesComponent', () => {

  // Define variables for this spec file
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesComponent, ExponentialStrengthPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the PipesComponent for each test
    fixture = TestBed.createComponent(PipesComponent);
    // Get the instance of the PipesComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });

  it('should display exponential strength', () => {
    // Get span from template
    const span = fixture.nativeElement.querySelector('span');
    // Assert the rendered value to be transformed by the pipe
    expect(span.innerHTML).toBe('2^10 = 1024');
  });
});
