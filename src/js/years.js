// import $ from 'jquery';

 export default class EarthYears {
  constructor(ageOnEarth, ageOnMercury, ageOnVenus, ageOnMars, ageOnJupiter) {
  this.ageOnEarth = ageOnEarth;
  this.ageOnMercury = ageOnMercury;
  this.ageOnVenus = ageOnVenus;
  this.ageOnMars = ageOnMars
  this.ageOnJupiter = ageOnJupiter;
  }
  mercuryAge () {
    this.ageOnMercury = this.ageOnEarth * 4.14;
    return this.ageOnMercury.toFixed(2);
    
  }
  venusAge () {
    this.ageOnVenus = this.ageOnEarth * 1.6;
    return this.ageOnVenus.toFixed(2);

  }
  marsAge () {
    this.ageOnMars = this.ageOnEarth * 1.88;
    return parseFloat(this.ageOnMars.toFixed(2))
  }
 }


