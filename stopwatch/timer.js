let tens = 0;
let sec = 0;

let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
let interval;
let v = 1;
let starthit = 0;

if (startbtn) {
  startbtn.addEventListener("click", function () {
    console.log("hello");
    //starthit++;
    v = 2;
    interval = setInterval(function () {
      tens += 1;
      console.log("startinterval" + interval);
      if (tens == 100) {
        sec += 1;
        if (sec < 10) document.getElementById("sec").innerHTML = "0" + sec;
        else document.getElementById("sec").innerHTML = "" + sec;
        tens %= 100;
      }
      if (tens < 10) document.getElementById("tens").innerHTML = "0" + tens;
      else document.getElementById("tens").innerHTML = "" + tens;
    }, 10);
  });
}

if (stopbtn) {
  if (!interval) {
    stopbtn.addEventListener("click", function () {
      console.log("stop");
      clearInterval(interval);
      //document.getElementById("sec").innerHTML = "00";
      //document.getElementById("tens").innerHTML = "00";
      console.log(v);
    });
  }
}

if (resetbtn) {
  if (!interval) {
    resetbtn.addEventListener("click", function () {
      //console.log("reset");
      clearInterval(interval);
      document.getElementById("sec").innerHTML = "00";
      document.getElementById("tens").innerHTML = "00";
      //console.log(v);
      tens = 0;
      sec = 0;
      console.log("interval" + interval);
    });
  }
}
