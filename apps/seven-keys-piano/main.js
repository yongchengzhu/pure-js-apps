const piano_A = document.querySelector('#piano_A');
const piano_S = document.querySelector('#piano_S');
const piano_D = document.querySelector('#piano_D');
const piano_F = document.querySelector('#piano_F');
const piano_G = document.querySelector('#piano_G');
const piano_H = document.querySelector('#piano_H');
const piano_J = document.querySelector('#piano_J');

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
})
