import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingComponent } from './databinding.component';

describe('DatabindingComponent', () => {

  // Define variables for this spec file
  let component: DatabindingComponent;
  let fixture: ComponentFixture<DatabindingComponent>;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the DatabindingComponent for each test
    fixture = TestBed.createComponent(DatabindingComponent);
    // Get the instance of the DatabindingComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });
});
