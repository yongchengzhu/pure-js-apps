const piano_A = document.querySelector('#piano_A');
const piano_S = document.querySelector('#piano_S');
const piano_D = document.querySelector('#piano_D');
const piano_F = document.querySelector('#piano_F');
const piano_G = document.querySelector('#piano_G');
const piano_H = document.querySelector('#piano_H');
const piano_J = document.querySelector('#piano_J');
const piano_W = document.querySelector('#piano_W');
const piano_E = document.querySelector('#piano_E');
const piano_T = document.querySelector('#piano_T');
const piano_Y = document.querySelector('#piano_Y');
const piano_U = document.querySelector('#piano_U');

document.addEventListener('keydown', event => {
  if (event.key === 'a' || event.key === 'A') {
    document.querySelector('#keyA').classList.add('pressed');
    piano_A.currentTime = 0;
    piano_A.play();
  }

  if (event.key === 's' || event.key === 'S') {
    document.querySelector('#keyS').classList.add('pressed');
    piano_S.currentTime = 0;
    piano_S.play();
  }

  if (event.key === 'd' || event.key === 'D') {
    document.querySelector('#keyD').classList.add('pressed');
    piano_D.currentTime = 0;
    piano_D.play();
  }

  if (event.key === 'f' || event.key === 'F') {
    document.querySelector('#keyF').classList.add('pressed');
    piano_F.currentTime = 0;
    piano_F.play();
  }

  if (event.key === 'g' || event.key === 'G') {
    document.querySelector('#keyG').classList.add('pressed');
    piano_G.currentTime = 0;
    piano_G.play();
  }

  if (event.key === 'h' || event.key === 'H') {
    document.querySelector('#keyH').classList.add('pressed');
    piano_H.currentTime = 0;
    piano_H.play();
  }

  if (event.key === 'j' || event.key === 'J') {
    document.querySelector('#keyJ').classList.add('pressed');
    piano_J.currentTime = 0;
    piano_J.play();
  }
  // Sharps
  if (event.key === 'w' || event.key === 'W') {
    document.querySelector('#keyW').classList.add('pressed2');
    piano_W.currentTime = 0;
    piano_W.play();
  }
  if (event.key === 'e' || event.key === 'E') {
    document.querySelector('#keyE').classList.add('pressed2');
    piano_E.currentTime = 0;
    piano_E.play();
  }
  if (event.key === 't' || event.key === 'T') {
    document.querySelector('#keyT').classList.add('pressed2');
    piano_T.currentTime = 0;
    piano_T.play();
  }
  if (event.key === 'y' || event.key === 'Y') {
    document.querySelector('#keyY').classList.add('pressed2');
    piano_Y.currentTime = 0;
    piano_Y.play();
  }
  if (event.key === 'u' || event.key === 'U') {
    document.querySelector('#keyU').classList.add('pressed2');
    piano_U.currentTime = 0;
    piano_U.play();
  }
});

document.addEventListener('keyup', event => {
  if (event.key === 'a' || event.key === 'A') {
    document.querySelector('#keyA').classList.remove('pressed');
  }

  if (event.key === 's' || event.key === 'S') {
    document.querySelector('#keyS').classList.remove('pressed');
    piano_A.load();
  }

  if (event.key === 'd' || event.key === 'D') {
    document.querySelector('#keyD').classList.remove('pressed');
  }

  if (event.key === 'f' || event.key === 'F') {
    document.querySelector('#keyF').classList.remove('pressed');
  }

  if (event.key === 'g' || event.key === 'G') {
    document.querySelector('#keyG').classList.remove('pressed');
  }

  if (event.key === 'h' || event.key === 'H') {
    document.querySelector('#keyH').classList.remove('pressed');
  }

  if (event.key === 'j' || event.key === 'J') {
    document.querySelector('#keyJ').classList.remove('pressed');
  }

  // Sharps
  if (event.key === 'w' || event.key === 'W') {
    document.querySelector('#keyW').classList.remove('pressed2');
  }
  if (event.key === 'e' || event.key === 'E') {
    document.querySelector('#keyE').classList.remove('pressed2');
  }
  if (event.key === 't' || event.key === 'T') {
    document.querySelector('#keyT').classList.remove('pressed2');
  }
  if (event.key === 'y' || event.key === 'Y') {
    document.querySelector('#keyY').classList.remove('pressed2');
  }
  if (event.key === 'u' || event.key === 'U') {
    document.querySelector('#keyU').classList.remove('pressed2');
  }
})
