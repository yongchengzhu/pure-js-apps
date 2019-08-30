let clock = document.querySelector('circle');
let secHand = document.querySelector('#sec');
let minHand = document.querySelector('#min');
let hrHand  = document.querySelector('#hr');
let secText = document.querySelector('#secText');

draw();

window.addEventListener('resize', draw);

setInterval(() => {
  draw();
}, 1000);

// -----------------------------------------------------------------------------
// Helper Methods
// -----------------------------------------------------------------------------
function draw() {
  const width  = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const radius = (width / 2) < (height / 2) ? width / 2 : height / 2;

  // Draw clock.
  clock.setAttribute('cx', width / 2);
  clock.setAttribute('cy', height / 2);
  clock.setAttribute('r', radius);

  // Clear previous ticks. (For window resize.)
  let ticks = document.querySelectorAll('.ticks');
  if (ticks.length) ticks.forEach(e => e.parentNode.removeChild(e));

  // Draw ticks.
  for (let i = 0; i <= 360 - 6; i += 6) {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    let offset = i % 30 === 0? 20 : 10;
    line.setAttribute('x1', getX(getRadian(i), radius, width));
    line.setAttribute('y1', getY(getRadian(i), radius, height));
    line.setAttribute('x2', getX(getRadian(i), radius - offset, width));
    line.setAttribute('y2', getY(getRadian(i), radius - offset, height));
    line.setAttribute('stroke', 'orange');
    line.setAttribute('stroke-width', 1);
    line.setAttribute('class', 'ticks');
    document.querySelector('svg').appendChild(line);
  }

  // Get time.
  const date = new Date();
  const hr   = date.getHours();
  const min  = date.getMinutes();
  const sec  = date.getSeconds();

  // Draw digital time.
  secText.innerHTML = `${hr}:${min}:${sec}`;

  // Draw hands.
  secHand.setAttribute('x1', width / 2);
  secHand.setAttribute('y1', height / 2);
  secHand.setAttribute('x2', getX(getRadian(getSecondsAngle(sec)), radius - 30, width));
  secHand.setAttribute('y2', getY(getRadian(getSecondsAngle(sec)), radius - 30, height));

  minHand.setAttribute('x1', width / 2);
  minHand.setAttribute('y1', height / 2);
  minHand.setAttribute('x2', getX(getRadian(getMinutesAngle(sec, min)), radius - 40, width));
  minHand.setAttribute('y2', getY(getRadian(getMinutesAngle(sec, min)), radius - 40, height));

  hrHand.setAttribute('x1', width / 2);
  hrHand.setAttribute('y1', height / 2);
  hrHand.setAttribute('x2', getX(getRadian(getHoursAngle(sec, min, hr)), radius - 50, width));
  hrHand.setAttribute('y2', getY(getRadian(getHoursAngle(sec, min, hr)), radius - 50, height));

  secText.setAttribute('x', width / 2);
  secText.setAttribute('y', height / 2);
  secText.setAttribute('font-size', 32);
}

function getRadian(angle) {
  return (angle - 90) * Math.PI / 180;
}

function getSecondsAngle(sec) {
  return sec / 60 * 360;
}

function getMinutesAngle(sec, min) {
  return (min + (sec / 60)) / 60 * 360;
}

function getHoursAngle(sec, min, hr) {
  return (hr + (min + sec / 60) / 60 ) / 12 * 360;
}

function getX(radian, radius, width) {
  return radius * Math.cos(radian) + (width / 2);
}

function getY(radian, radius, height) {
  return radius * Math.sin(radian) + (height / 2);
}
