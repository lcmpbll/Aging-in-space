import EarthYears from '../src/js/years.js';

describe("EarthYears", () => {
  test("Should set the variable age equal to a number", () => {
    const age = new EarthYears(3);
    expect(age.ageOnEarth).toEqual(3)
  });
});

test('should correctly return the inputted Earth age in Mercury years', () => {
  const age = new EarthYears(3);
  expect(age.mercuryAge()).toEqual(12.42);
});

test('should correctly return the inputted Earth age in Venus years', () => {
  const age = new EarthYears(3);
  expect (age.venusAge()).toEqual(4.8);
});

test('should correctly return the inputted Earth age in Mars years ', () => {
  const age = new EarthYears(3);
  expect(age.marsAge()).toEqual(1.59);
});

test('should correctly return the inputted Earth age in Jupiter years ', () => {
  const age = new EarthYears(3);
  expect(age.jupiterAge()).toEqual(.25);
});


test('should determine the number of years a user has left based average life expectancy', () => {
 const age = new EarthYears(30);
  expect(age.lifeExpectancy()).toEqual(50.00);
});

test('should determine the number of years a user has left in Jupiter years', () => {
  const age = new EarthYears(30);
  expect(age.jupiterAge()).toEqual(2.52);
  expect(age.lifeExpectancyJupiter()).toEqual(4.2);
});

test('should determine the number of years a user has left in Mars years',
() => {
  const age = new EarthYears(30);
  expect(age.marsAge()).toEqual(15.90);
  expect(age.lifeExpectancyMars()).toEqual(26.5);
});

test('should determine the number of years a user has left in Venus years',
() => {
  const age = new EarthYears(30);
  expect(age.venusAge()).toEqual(48.0);
  expect(age.lifeExpectancyVenus()).toEqual(80);
});

test('should determine the number of years a user has left in Mercury years',
() => {
  const age = new EarthYears(30);
  expect(age.mercuryAge()).toEqual(124.2);
  expect(age.lifeExpectancyMercury()).toEqual(207);
});

test('should return the years a user has lived passed their life expectancy if they have a negative number of years remaining.',
() => {
  const age = new EarthYears(81);
  expect(age.lifeExpectancy()).toEqual(-1);
  expect(age.pastLifeExpectancy()).toEqual("You are 1 year older than the average life expectancy");
});

test('should return the years a user has lived passed their life expectancy if they have a negative number of years remaining.',
() => {
  const age = new EarthYears(81);
  expect(age.lifeExpectancy()).toEqual(-1);
  expect(age.pastLifeExpectancy()).toEqual("You are 1 year older than the average life expectancy");
});

test('should return the years a user has lived passed their life expectancy if they have a negative number of years remaining.',
() => {
  const age = new EarthYears(81);
  expect(age.lifeExpectancy()).toEqual(-1);
  expect(age.pastLifeExpectancy()).toEqual("You are 1 year older than the average life expectancy");
});

test('should return the years a user has lived passed their life expectancy if they have a negative number of years remaining.',
() => {
  const age = new EarthYears(79);
  expect(age.lifeExpectancy()).toEqual(1);
  expect(age.pastLifeExpectancy()).toEqual("Keep getting older!");
});

test('should return the years a user has lived passed their life expectancy on Mercury if they have a negative number of years remaining.',
() => {
  const age = new EarthYears(81);
  expect(age.lifeExpectancyMercury()).toEqual(1);
  expect(age.pastLifeExpectancy()).toEqual("You are 1 year older than the average life expectancy");
});