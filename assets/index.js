function init() {
  time();
}

function time() {
  let date = new Date();
  let current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById("time").innerHTML = "Time: " + current_time + "AM";
}

function date() {
  let date = new Date();
  let current_date = date.getDate();
}

init();
