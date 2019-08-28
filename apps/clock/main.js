const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

let clock = document.querySelector('circle');
let secHand = document.querySelector('#sec');
let minHand = document.querySelector('#min');
let hrHand  = document.querySelector('#hr');

let secText = document.querySelector('#secText');

// Length of hands
const secOffset = (height / 2) * 0.20;
const minOffset = (height / 2) * 0.40;
const hrOffset  = (height / 2) * 0.60;

clock.setAttribute('cx', width / 2);
clock.setAttribute('cy', height / 2);
clock.setAttribute('r', height / 2);

secHand.setAttribute('x1', width / 2);
secHand.setAttribute('y1', height / 2);
secHand.setAttribute('x2', width / 2);
secHand.setAttribute('y2', 0 + secOffset);

minHand.setAttribute('x1', width / 2)
minHand.setAttribute('y1', height / 2)
minHand.setAttribute('x2', width / 2)
minHand.setAttribute('y2', 0 + minOffset);

hrHand.setAttribute('x1', width / 2)
hrHand.setAttribute('y1', height / 2)
hrHand.setAttribute('x2', width / 2)
hrHand.setAttribute('y2', 0 + hrOffset);

secText.setAttribute('x', width / 2);
secText.setAttribute('y', height / 2);
secText.setAttribute('font-size', 32);


// Transform
// seconds.setAttribute('transform', `rotate(${ sec / 60 * 360 })`);

setInterval(() => {
  const date = new Date();
  const hr   = date.getHours();
  const min  = date.getMinutes();
  const sec  = date.getSeconds();
  secText.innerHTML = `${hr}:${min}:${sec}`;
  secHand.setAttribute('transform', `rotate(${ sec / 60 * 360 })`);
  minHand.setAttribute('transform', `rotate(${ (min + (sec / 60)) / 60 * 360 })`);
  hrHand .setAttribute('transform', `rotate(${ (hr + (min + sec / 60) / 60 ) / 12 * 360 })`)
}, 1000);
