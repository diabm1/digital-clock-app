function init() {
  time();
  date();
}

// Clock should show the seconds update every one second (in other words it should seem as if the clock is ticking
function time() {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  //   const current_time =
  //     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  seconds = leadingZero(seconds);
  minutes = leadingZero(minutes);
  hours = leadingZero(hours);

  let amOrPm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12;
//   hours = hours ? hours : 12;

  document.getElementById(
    "time"
  ).innerText = `${hours}:${minutes}:${seconds} ${amOrPm}`;
}

setInterval(time, 1000);

// Clock should show current time in format HH:MM:SS (Example: 03:39:09)
// Clock should show current time for hours, minutes and seconds with leading zeros.  For example, if it should say 04:04:09 instead of 4:4:9.
function leadingZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Clock should show current date in format Day, Month Date Year (eg. Monday, August 12th 2021)
function date() {
  const date = new Date();
  let day = date.getDay();
  let today = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  //   const current_date =
  //     date.getDate() + ", " + (date.getMonth() + 1) + " " + date.getFullYear();

  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }

  switch (day) {
    case 0:
      today = "Sunday";
      break;
    case 1:
      today = "Monday";
      break;
    case 2:
      today = "Tuesday";
      break;
    case 3:
      today = "Wednesday";
      break;
    case 4:
      today = "Thursday";
      break;
    case 5:
      today = "Friday";
      break;
    case 6:
      today = "Saturday";
  }

  //date.getDate temp solution to the today variable issue
  document.getElementById(
    "date"
  ).innerText = `${today}, ${month} ${date.getDate()} ${year}`;
  //   console.log(`${today}, ${month} ${year}`);
}

function dayOfMonthSuffix(numOfDayOfMonth) {
    let date = new Date();
    let today = date.getDate();
    // if today ends with first add 'st' to end 
    // if today ends with second add 'nd' to end 
    // if today ends with third add 'rd' to end of today
    // else add 'th' to end of today
    // switch () {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }

}

init();
