document.addEventListener('keydown', event => {
  if (event.key === 's' || event.key === 'S') {
    document.querySelector('#keyS').classList.add('pressed');
  }

  if (event.key === 'd' || event.key === 'D') {
    document.querySelector('#keyD').classList.add('pressed');
  }

  if (event.key === 'f' || event.key === 'F') {
    document.querySelector('#keyF').classList.add('pressed');
  }

  if (event.key === ' ') {
    document.querySelector('#keySpc').classList.add('pressed');
  }

  if (event.key === 'j' || event.key === 'J') {
    document.querySelector('#keyJ').classList.add('pressed');
  }

  if (event.key === 'k' || event.key === 'K') {
    document.querySelector('#keyK').classList.add('pressed');
  }

  if (event.key === 'l' || event.key === 'L') {
    document.querySelector('#keyL').classList.add('pressed');
  }
});

document.addEventListener('keyup', event => {
  if (event.key === 's' || event.key === 'S') {
    document.querySelector('#keyS').classList.remove('pressed');
  }

  if (event.key === 'd' || event.key === 'D') {
    document.querySelector('#keyD').classList.remove('pressed');
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
