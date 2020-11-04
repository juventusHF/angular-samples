import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionComponent } from './component-interaction.component';

describe('ComponentInteractionComponent', () => {

  // Define variables for this spec file
  let fixture: ComponentFixture<ComponentInteractionComponent>;
  let component: ComponentInteractionComponent;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the ComponentInteractionComponent for each test
    fixture = TestBed.createComponent(ComponentInteractionComponent);
    // Get the instance of the ComponentInteractionComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });

  it('should toggle redBackground', () => {
    // Read html element from the template
    const div = fixture.nativeElement.querySelector('.app-component');
    // Set value of redBackground in the component
    component.redBackground = true;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
    // Assert that the background-red class is set on the div
    expect(div.classList).toContain('background-red');
    // Call function changeBackgroundColor
    component.changeBackgroundColor();
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
    // Assert that the value of redBackground has changed
    expect(component.redBackground).toBeFalse();
    // Assert that the background-blue class is set on the div
    expect(div.classList).toContain('background-blue');
  });
});
