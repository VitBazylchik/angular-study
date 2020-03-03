import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('should return a right string of time duration', () => {
    expect(pipe.transform(61)).toEqual('1h 01min');
  })
});
