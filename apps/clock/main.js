const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

let clock = document.querySelector('circle');
let seconds = document.querySelector('#sec');

// Length of seconds hand; 80% of radius.
const secOffset = (height / 2) * 0.20;

clock.setAttribute('cx', width / 2);
clock.setAttribute('cy', height / 2);
clock.setAttribute('r', height / 2);

seconds.setAttribute('x1', width / 2);
seconds.setAttribute('y1', height / 2);
seconds.setAttribute('x2', width / 2);
seconds.setAttribute('y2', 0 + secOffset);
