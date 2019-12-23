const massFuel = require('./constants/input');
const fuelCounterUpperAdditional = require('./fuelCounterUpperAdditional');

describe('fuelCounterUpper', () => {
  it('returns the correct value when Mass is 14', () => {
    const result = fuelCounterUpperAdditional([14]);
    expect(result).toEqual(2);
  });
  it('returns the correct value when Mass is 1969', () => {
    const result = fuelCounterUpperAdditional([1969]);
    expect(result).toEqual(966);
  });
  it('returns the correct value when Mass is 100756', () => {
    const result = fuelCounterUpperAdditional([100756]);
    expect(result).toEqual(50346);
  });
  it('returns the correct value when Mass is 100756', () => {
    const result = fuelCounterUpperAdditional(massFuel);
    expect(result).toEqual(5106777);
  });
});
