import * as fromKek from './kek.reducer';
import { selectKekState } from './kek.selectors';

describe('Kek Selectors', () => {
  it('should select the feature state', () => {
    const result = selectKekState({
      [fromKek.kekFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
