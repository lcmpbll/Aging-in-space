// import $ from 'jquery';

 export default class EarthYears {
  constructor(ageOnEarth, ageOnMercury, ageOnVenus) {
  this.ageOnEarth = ageOnEarth;
  this.ageOnMercury = ageOnMercury;
  this.ageOnVenus = ageOnVenus;
  }
  mercuryAge () {
    this.ageOnMercury = this.ageOnEarth * 4.14;
    return this.ageOnMercury.toFixed(2);
    
  }
  venusAge () {
    this.ageOnVenus = this.ageOnEarth * 1.6;
    return this.ageOnVenus.toFixed(2);

  }
 }


