const currentDayElement = document.querySelector('.current-day');
const currentUTCTimeElement = document.querySelector('.current-utc-time');

function getCurrentDayOfWeek() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

function getCurrentUTCTime() {
  const currentUTC = Date.now();
  currentUTCTimeElement.textContent = currentUTC;
}

document.addEventListener('DOMContentLoaded', function () {
  currentDayElement.textContent = getCurrentDayOfWeek();

  setInterval(getCurrentUTCTime, 1000);
});
