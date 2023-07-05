let homeScore = document.getElementById('homeScore');
let guestScore = document.getElementById('guestScore');

homeScore.textContent = 0;
guestScore.textContent = 0;

function homeAdd() {
  homeScore.textContent ++;
  if (homeScore.textContent  > 10) {
    homeScore.textContent = 'WON';
  }
}
function guestAdd() {
  guestScore.textContent ++;
  
}

function homeReset() {
  homeScore.textContent = 0;
}
function guestReset() {
  guestScore.textContent = 0;
}
