function christmasCountdown () {
  const christmasDate = new Date('December 25, 2022 00:00');
  const now = new Date ();
  const diff = christmasDate - now;

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;
  
  const displayDay = Math.floor(diff/msInDay);
  document.querySelector('.days').textContent = displayDay;

  const displayHours = Math.floor((diff%msInDay) / msInHour);
  document.querySelector('.hours').textContent = displayHours;

  const displayMin = Math.floor((diff%msInHour) / msInMinute);
  document.querySelector('.minutes').textContent = displayMin;

  const displaySec = Math.floor((diff%msInMinute) / msInSecond);
  document.querySelector('.seconds').textContent = displaySec;

if (diff <= 0) {
  document.querySelector('.days').textContent = 0;
  document.querySelector('.hours').textContent = 0;
  document.querySelector('.minutes').textContent = 0;
  document.querySelector('.seconds').textContent = 0;
  clearInterval()
}}
let timerID = setInterval(christmasCountdown, 1000)
christmasCountdown();