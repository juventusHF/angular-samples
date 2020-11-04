import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {

  // Define variables for this spec file
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the TestingComponent for each test
    fixture = TestBed.createComponent(TestingComponent);
    // Get the instance of the TestingComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });
});
