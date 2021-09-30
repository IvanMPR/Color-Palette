'use-strict';

const button = document.querySelector('.btn-change');
const palettes = document.querySelectorAll('.palette');
const palettesContainer = document.querySelector('.palette-container');
const successfulCopyH3 = document.querySelector('h3');
const sound = new Audio('sounds/171697__nenadsimic__menu-selection-click.wav');
const nextPaletteSound = new Audio('sounds/320181__dland__hint.wav');

window.addEventListener('load', function () {
  palettes.forEach(palette => changeHex(palette));
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
  nextPaletteSound.play();
});

palettesContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('fa-copy')) return;
  const colorCode = e.target
    .closest('.text-container')
    .querySelector('.color-code').textContent;
  // Store colorCode in temporary input el, to be able to select it
  const tempInput = document.createElement('input');
  tempInput.value = colorCode;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  sound.play();
  successfulCopyH3.classList.toggle('hidden');
  setTimeout(() => {
    successfulCopyH3.classList.toggle('hidden');
  }, 800);
  // Delete temporary input element
  document.body.removeChild(tempInput);
});
