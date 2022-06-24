import EarthYears from '../src/js/years.js';


describe("EarthYears", () => {
  test("Should set the variable age equal to a number", () => {
    const age = new EarthYears(3);
    expect(age.ageOnEarth).toEqual(3)
  });
});

test('should correctly return the inputted Earth age in Mercury years', () => {
  const age = new EarthYears(3);
  expect(age.mercuryAge()).toEqual("12.42");
});

test('should correctly return the inputted Earth age in Venus years', () => {
  const age = new EarthYears(3);
  expect (age.venusAge()).toEqual("4.80");
});

test('should correctly return the inputted Earth age in Mars years ', () => {
  const age = new EarthYears(3);
  expect(age.marsAge()).toEqual(5.64);
});