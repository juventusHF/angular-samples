import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {

  // Note: test the functionality of the directive in a component where it it used

  it('should create an instance', () => {
    // Create instance of the directive
    const directive = new HighlightDirective(null);
    // Assert that the directive instance was successfully created
    expect(directive).toBeTruthy();
  });

});
