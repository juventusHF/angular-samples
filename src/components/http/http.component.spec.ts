import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpComponent } from './http.component';
import {JokeService} from '../../services/joke/joke.service';
import {of} from 'rxjs';

describe('HttpComponent', () => {

  // Define variables for this spec file
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the HttpComponent for each test
    fixture = TestBed.createComponent(HttpComponent);
    // Get the instance of the HttpComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });

  it('should load joke', () => {
    // Define expected response from service
    const expectedJokeResponse = {type: 'test', value: {id: 1, joke: 'joke', categories: []}};
    // Mock the response of the getJoke function
    // @ts-ignore
    component.jokeService.getJoke = () => of(expectedJokeResponse);
    // Call loadJoke function
    component.loadJoke();
    // Assert that the jokeResponse got updated correctly
    expect(component.jokeResponse).toEqual(expectedJokeResponse);
  });
});
