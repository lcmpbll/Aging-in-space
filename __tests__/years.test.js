import EarthYears from '../src/js/years.js';


describe("EarthYears", () => {
  test("Should set the variable age equal to a number", () => {
    const ageOnEarth = new EarthYears(3);
    expect(ageOnEarth.earthYears).toEqual(3)
  });

});
