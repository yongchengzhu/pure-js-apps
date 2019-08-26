const whiteKeys = new Set(['A', 'S', 'D', 'F', 'G', 'H', 'J']);

document.addEventListener('keydown', event => {
  const pianoKey = document.querySelector(`#key${event.key.toUpperCase()}`);

  if (pianoKey) {
    const className = whiteKeys.has(event.key.toUpperCase())? 'pressed' : 'pressed2';
    const isPressed = pianoKey.classList.contains(className);

    if (isPressed) return;

    pianoKey.classList.add(className);
    const pianoSound = document.querySelector(`#piano_${event.key.toUpperCase()}`);
    pianoSound.currentTime = 0;
    pianoSound.play();
  }
});

document.addEventListener('keyup', event => {
  const pianoKey = document.querySelector(`#key${event.key.toUpperCase()}`);

  if (pianoKey) {
    const className = whiteKeys.has(event.key.toUpperCase())? 'pressed' : 'pressed2';
    document.querySelector(`#key${event.key.toUpperCase()}`).classList.remove(className);
  }
})
