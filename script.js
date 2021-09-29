'use-strict';

const button = document.querySelector('.btn-change');
const palettes = document.querySelectorAll('.palette');
const palettesContainer = document.querySelector('.palette-container');

window.addEventListener('load', function () {
  palettes.forEach(palette => changeHex(palette));
});

palettesContainer.addEventListener('mouseover', e => {
  if (e.target.classList.contains('palette')) {
    e.target.querySelector('p').classList.add('active');
  }
});

palettesContainer.addEventListener('mouseout', e => {
  if (e.target.classList.contains('palette')) {
    e.target.querySelector('p').classList.remove('active');
  }
});

const changeHex = function (el) {
  let finalValue = '#';
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < 6; i++) {
    finalValue += values[Math.trunc(Math.random() * values.length)];
  }
  el.style.background = `${finalValue}`;
  el.querySelector('p').textContent = `${finalValue}`;
};

button.addEventListener('click', () => {
  palettes.forEach(palette => changeHex(palette));
});
