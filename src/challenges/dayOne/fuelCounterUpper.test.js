const massFuel = require('./constants/input');
const fuelCounterUpper = require('./fuelCounterUpper');

describe('fuelCounterUpper', () => {
  it('returns the correct value when Mass is 14', () => {
    const result = fuelCounterUpper([14]);
    expect(result).toEqual(2);
  });

  it('returns the correct value when Mass is 100756', () => {
    const result = fuelCounterUpper([100756]);
    expect(result).toEqual(33583);
  });

  it('returns the correct sum total for an array of masses', () => {
    const massArray = [103842, 72629, 121232, 120959, 94285, 85852];
    const result = fuelCounterUpper(massArray);
    expect(result).toEqual(199585);
  });
  it('reutns the correct sum total with final data set', () => {
    const result = fuelCounterUpper(massFuel);
    console.log(fuelCounterUpper(massFuel));
    expect(result).toEqual(3406432);
  });
});
