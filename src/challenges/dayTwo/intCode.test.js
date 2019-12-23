const puzzleInput = require('./constants/input');
const intCode = require('./intCode');

describe('fuelCounterUpper', () => {
  it('returns the correct opcode calculation given a single input line', () => {
    const result = intCode([1, 0, 0, 0, 99]);

    expect(result).toEqual([2, 0, 0, 0, 99]);
  });
  it('returns the correct opcode calculation given a single input line', () => {
    const result = intCode([2, 3, 0, 3, 99]);

    expect(result).toEqual([2, 3, 0, 6, 99]);
  });
  it('returns the correct opcode calculation given a single input line', () => {
    const result = intCode([2, 4, 4, 5, 99, 0]);

    expect(result).toEqual([2, 4, 4, 5, 99, 9801]);
  });
  it('returns the correct opcode calculation given a single input line', () => {
    const result = intCode([1, 1, 1, 4, 99, 5, 6, 0, 99]);

    expect(result).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });
  it('returns the correct opcode calculation given the input', () => {
    const result = intCode([
      1, 9, 10, 3,
      2, 3, 11, 0,
      99,
      30, 40, 50,
    ]);

    expect(result).toEqual([
      3500, 9, 10, 70,
      2, 3, 11, 0,
      99,
      30, 40, 50]);
  });
  it('returns the correct opcode calculation given the final input', () => {
    const result = intCode(puzzleInput.input);

    expect(result).toEqual(puzzleInput.output);
  });
});
