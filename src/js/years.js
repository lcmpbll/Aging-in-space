
 export default class EarthYears {
  constructor(ageOnEarth, ageOnMercury, ageOnVenus, ageOnMars, ageOnJupiter, yearsRemaining, yearsRemainingJupiter, yearsRemainingMars, yearsRemainingVenus, yearsRemainingMercury) {
  this.ageOnEarth = ageOnEarth;
  this.ageOnMercury = ageOnMercury;
  this.ageOnVenus = ageOnVenus;
  this.ageOnMars = ageOnMars;
  this.ageOnJupiter = ageOnJupiter;
  this.yearsRemaining = yearsRemaining;
  this.yearsRemainingJupiter = yearsRemainingJupiter;
  this.yearsRemainingMars = yearsRemainingMars;
  this.yearsRemainingVenus = yearsRemainingVenus;
  this.yearsRemainingMercury = yearsRemainingMercury;
  }
  mercuryAge () {
    this.ageOnMercury = this.ageOnEarth * 4.14;
    return parseFloat(this.ageOnMercury.toFixed(2));
  }
  venusAge () {
    this.ageOnVenus = this.ageOnEarth * 1.6;
    return parseFloat(this.ageOnVenus.toFixed(2));

  }
  marsAge () {
    this.ageOnMars = this.ageOnEarth * .53;
    return parseFloat(this.ageOnMars.toFixed(2));
  }
  jupiterAge () {
    this.ageOnJupiter = this.ageOnEarth * 0.084;
    return parseFloat(this.ageOnJupiter.toFixed(2));
  }
  lifeExpectancy () {
    this.yearsRemaining = 80 - this.ageOnEarth;
    return parseFloat(this.yearsRemaining.toFixed(2));
  }
  lifeExpectancyJupiter () {
    this.yearsRemainingJupiter = (80 * .084) - this.ageOnJupiter;
    return parseFloat(this.yearsRemainingJupiter.toFixed(2));
  }
  lifeExpectancyMars () {
    this.yearsRemainingMars = (80 * .53) - this.ageOnMars;
    return parseFloat(this.yearsRemainingMars.toFixed(2));
  }
  lifeExpectancyVenus () {
    this.yearsRemainingVenus = (80 * 1.6) - this.ageOnVenus;
    return parseFloat(this.yearsRemainingVenus.toFixed(2));
  }
  lifeExpectancyMercury () {
    this.yearsRemainingMercury = (80 * 4.14) - this.ageOnMercury;
    return (parseFloat(this.yearsRemainingMercury.toFixed()));
  }
  pastLifeExpectancy () {
    if (this.yearsRemaining < 0) {
    let yearsOver = Math.abs(this.yearsRemaining);
    return "You are " + yearsOver.toString() + " year older than the average life expectancy";
    } else {
      return "Keep getting older!"
    }
  }
}



