const piano_A = document.querySelector('#piano_A');
const piano_B = document.querySelector('#piano_B');
const piano_C = document.querySelector('#piano_C');
const piano_D = document.querySelector('#piano_D');
const piano_E = document.querySelector('#piano_E');
const piano_F = document.querySelector('#piano_F');
const piano_G = document.querySelector('#piano_G');

document.addEventListener('keydown', event => {
  if (event.key === 's' || event.key === 'S') {
    document.querySelector('#keyS').classList.add('pressed');
    piano_A.currentTime = 0;
    piano_A.play();
  }

  if (event.key === 'd' || event.key === 'D') {
    document.querySelector('#keyD').classList.add('pressed');
    piano_B.currentTime = 0;
    piano_B.play();
  }

  if (event.key === 'f' || event.key === 'F') {
    document.querySelector('#keyF').classList.add('pressed');
    piano_C.currentTime = 0;
    piano_C.play();
  }

  if (event.key === ' ') {
    document.querySelector('#keySpc').classList.add('pressed');
    piano_D.currentTime = 0;
    piano_D.play();
  }

  if (event.key === 'j' || event.key === 'J') {
    document.querySelector('#keyJ').classList.add('pressed');
    piano_E.currentTime = 0;
    piano_E.play();
  }

  if (event.key === 'k' || event.key === 'K') {
    document.querySelector('#keyK').classList.add('pressed');
    piano_F.currentTime = 0;
    piano_F.play();
  }

  if (event.key === 'l' || event.key === 'L') {
    document.querySelector('#keyL').classList.add('pressed');
    piano_G.currentTime = 0;
    piano_G.play();
  }
});

document.addEventListener('keyup', event => {
  if (event.key === 's' || event.key === 'S') {
    document.querySelector('#keyS').classList.remove('pressed');
  }

  if (event.key === 'd' || event.key === 'D') {
    document.querySelector('#keyD').classList.remove('pressed');
    piano_A.load();
  }

  if (event.key === 'f' || event.key === 'F') {
    document.querySelector('#keyF').classList.remove('pressed');
  }

  if (event.key === ' ') {
    document.querySelector('#keySpc').classList.remove('pressed');
  }

  if (event.key === 'j' || event.key === 'J') {
    document.querySelector('#keyJ').classList.remove('pressed');
  }

  if (event.key === 'k' || event.key === 'K') {
    document.querySelector('#keyK').classList.remove('pressed');
  }

  if (event.key === 'l' || event.key === 'L') {
    document.querySelector('#keyL').classList.remove('pressed');
  }
})
