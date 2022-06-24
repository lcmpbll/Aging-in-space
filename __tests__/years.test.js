import EarthYears from '../src/js/years.js';


describe("EarthYears", () => {
  test("Should set the variable age equal to a number", () => {
    const age = new EarthYears(3);
    expect(age.ageOnEarth).toEqual(3)
  });
});

test('should correctly return the inputted earth age in mercury years', () => {
  const age = new EarthYears(3);
  expect(age.ageOnMercury()).toEqual("12.4 years old on the planet Mercury");
});