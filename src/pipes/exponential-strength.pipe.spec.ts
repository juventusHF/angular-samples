import { ExponentialStrengthPipe } from './exponential-strength.pipe';

describe('ExponentialStrengthPipe', () => {

  it('create an instance', () => {
    // Create instance of the pipe
    const pipe = new ExponentialStrengthPipe();
    // Assert that the pipe instance was successfully created
    expect(pipe).toBeTruthy();
  });

  it('should transform 2^10 to 1024', () => {
    // Create instance of the pipe
    const pipe = new ExponentialStrengthPipe();
    // Call the transform function
    const transformedValue = pipe.transform(2, 10);
    // Assert that the transformed value is correct
    expect(transformedValue).toBe(1024);
  });

});
