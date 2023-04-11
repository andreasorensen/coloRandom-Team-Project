
// Related DOM elements.
  // querySelector

var colorDisplay = document.querySelector('.main-color-display')
var colorBox = document.querySelectorAll('.color-box')
var newPaletteButton = document.querySelector('#new-palette')
var savePaletteButton =  document.querySelector('#save-palette')
var savedPaletteDisplay = document.querySelector('.saved-palette-display')

 // Event listeners:
window.addEventListener('load', displayRandomPalette)

var currentPalette;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}