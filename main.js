
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

function createHexCode() {
  var hexCharacters = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var hexCode = []
  for (var i = 0; i < 6; i++) {
    hexCode.push(hexCharacters[getRandomIndex(hexCharacters)])
  }
  return `#${hexCode.join('')}`
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}