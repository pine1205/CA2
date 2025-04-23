// JavaScript Document

const releaseDate = new Date("July 12, 2025 00:00:00").getTime();

//getTime converts date to milisec

const timerInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Now Streaming!";
  }
	//when time is over (< 0), it finishes countdown and replace it with title "Now Streaming"
}, 1000);




//setInterval() - runs a function every 1000 milliseconds which is 1 second
//lines 10,11,12,13 convert milliseconds into days, hours, minutes, seconds