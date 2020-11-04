import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesComponent } from './directives.component';

describe('DirectivesComponent', () => {

  // Define variables for this spec file
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the DirectivesComponent for each test
    fixture = TestBed.createComponent(DirectivesComponent);
    // Get the instance of the DirectivesComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });

  it('should add timestamp', () => {
    // Setup empty timestamps array
    component.timestamps = [];
    // Call function addTimestamp
    component.addTimestamp();
    // Assert that the timestamps array contains 1 entry
    expect(component.timestamps.length).toBe(1);
  });

  it('should remove timestamp', () => {
    // Setup timestamps array with 1 entry
    component.timestamps = [new Date().getTime()];
    // Call function removeTimestamp
    component.removeTimestamp();
    // Assert that the timestamps array is empty
    expect(component.timestamps.length).toBe(0);
  });
});
