// import $ from 'jquery';

 export default class EarthYears {
  constructor(ageOnEarth, ageOnMercury) {
  this.ageOnEarth = ageOnEarth
  this.ageOnMercury = ageOnMercury
  }
  mercuryAge () {
    this.ageOnMercury = this.ageOnEarth * 4.14;
    return this.ageOnMercury.toFixed(2);
    
  }
 }


