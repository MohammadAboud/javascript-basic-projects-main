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
//  selecting variables
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('deadline');

//  selecting day,month,hour,min,sec
const items = document.querySelectorAll('.deadline-format h4');

//  getting the current date
let currentDate = new Date(2023, 11, 7, 21, 30, 0);

//  getting the current Year

const currentYear = currentDate.getFullYear();

//  getting the current Month
let currentMonth = currentDate.getMonth();
currentMonth = months[currentMonth];

//  getting the current day
let currentDay = weekdays[currentDate.getDay()];

//  getting the current hour
const currentHour = currentDate.getHours();

//  getting the current Minute
const currentMin = currentDate.getMinutes();

//  getting the current Seconds
const currentSec = currentDate.getSeconds();

giveaway.textContent = `giveaway ends in ${currentMonth}  ${currentYear}  ${currentDay}  ${currentHour}:${currentMin} ${
  currentHour < 12 ? 'AM' : 'PM'
}`;

//  future time in Mili seconds

const futureTime = currentDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();

  //  getting the diff
  const t = futureTime - today;
  //  1s = 100ms
  // 1 min = 60sec
  //  1hr = 60 min
  //  1 day = 24hr

  //  values in mili seconds
  const miliSecondsInDay = 24 * 60 * 60 * 1000;
  const miliSecondsInHour = 60 * 60 * 1000;
  const miliSecondsInMin = 60 * 1000;

  let days = t / miliSecondsInDay;
  days = Math.floor(days);

  let hours = Math.floor((t % miliSecondsInDay) / miliSecondsInHour);
  let mins = Math.floor((t % miliSecondsInHour) / miliSecondsInMin);
  let secs = Math.floor((t % miliSecondsInMin) / 1000);

  // formatting time
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  //  set values array
  let values = [days, hours, mins, secs];

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry this giveaway has expired</h4>`;
  }
}

//  countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
