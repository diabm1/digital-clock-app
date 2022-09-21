// Clock should show the seconds update every one second (in other words it should seem as if the clock is ticking

// Clock should show current time in format HH:MM:SS (Example: 03:39:09)

// Clock should show current time for hours, minutes and seconds with leading zeros.  For example, if it should say 04:04:09 instead of 4:4:9.

// Clock should show current date in format Day, Month Date Year (eg. Monday, August 12th 2021)

function init() {
  time();
  date();
}

function time() {
  const date = new Date();
  const current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById("time").innerText = "Time: " + current_time;
}

function date() {
  const date = new Date();
  const current_date =
    date.getDate() + "st, " + (date.getMonth() + 1) + " " + date.getFullYear();
  document.getElementById("date").innerText = "Date: " + current_date;
}

init();
