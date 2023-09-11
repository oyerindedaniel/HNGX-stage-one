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
  return Date.now();
}

document.addEventListener('DOMContentLoaded', function () {
  const currentDayElement = document.querySelector('.current-day');
  const currentUTCTimeElement = document.querySelector('.current-utc-time');

  currentDayElement.textContent = getCurrentDayOfWeek();
  currentUTCTimeElement.textContent = getCurrentUTCTime();
});
