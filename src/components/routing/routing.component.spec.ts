import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent } from './routing.component';

describe('RoutingComponent', () => {

  // Define variables for this spec file
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the RoutingComponent for each test
    fixture = TestBed.createComponent(RoutingComponent);
    // Get the instance of the RoutingComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });
});
