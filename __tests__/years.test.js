import EarthYears from '../src/js/years.js';


describe("EarthYears", () => {
  test("Should set the variable age equal to a number", () => {
    const age = new EarthYears(3);
    expect(age.ageOnEarth).toEqual(3)
  });

});
