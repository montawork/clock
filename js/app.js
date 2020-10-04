// clock app

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const date = document.querySelector('.date');
const clock = document.querySelectorAll('.clock span');

const todayDate = new Date();
const weekday = weekdays[todayDate.getDay()];
const month = months[todayDate.getMonth()];
const day = todayDate.getDate();
const year = todayDate.getFullYear();

// get the date
window.addEventListener('DOMContentLoaded', () => {
  date.textContent = `${weekday}, ${month} ${day} ${year}`;
  setInterval(setTime, 1000);
});

function setTime() {
  'use strict';
  const hours = new Date().getHours() - 1;
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const times = [hours, minutes, seconds];

  clock.forEach((clock, i) => {
    clock.textContent = format(times[i]);
  });

  function format(t) {
    if (t < 10) {
      return `0${t}`;
    } else {
      return t;
    }
  }
}

// play tick sound
window.addEventListener('load', () => {
  setInterval(() => {
    const audio = new Audio('../sound.mp3');
    audio.play();
  }, 1000);
});
