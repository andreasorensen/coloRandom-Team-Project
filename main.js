// Variables:

var newPaletteButton = document.querySelector("#new-palette-button");
//var boxes = document.querySelector(".box");
var hexCaption = document.querySelectorAll(".caption");
var boxes = document.querySelectorAll(".box");

var hexValues = []
var randomHexCodes = [];
var currentPalette = []; // this will have x5 of our new hexcodes
var hexData = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Event Listeners:

window.addEventListener('load', function() {
    createNewPalette();
});

newPaletteButton.addEventListener('click', function() {
    // createHexString();
    createNewPalette();
});
  
function createHexCode() {
  var hexCharacters = [];
  for (var i = 0; i < 6; i++) {
    hexCharacters.push(hexData[Math.floor(Math.random() * hexData.length)])
  };
    var hexCode = `#${hexCharacters.join('')}`;
  return hexCode;
};

function createNewPalette() {
  var newPalette = [];
  for (var i = 0; i < 5; i++) {
    newPalette.push(createHexCode());
  };
    currentPalette = newPalette;
    console.log(newPalette)
};

function hexCodesCh() {
  for(var i = 0; i < hexCaption.length; i++) {
    hexCaption[i].innerText = currentPalette[i];
  };
    console.log(hexCodesCh())
};

function boxesColorCh() {
  for (var i =0; i < boxes.length; i++) {
    boxes[i].style.background =  currentPalette[i]
  };
};

function newPaletteDisplay() {
  createNewPalette();
  hexCodesCh();
  boxesColorCh();
};

