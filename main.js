
// Variables:
var newPaletteButton = document.querySelector("#new-palette-button");
var hexCaption = document.querySelectorAll(".captions");
var boxes = document.querySelectorAll(".boxes");
var lockImgSection = document.querySelector('.box')
var lockedImage = document.querySelector('.locked')
// var unlockedImage = document.querySelector('.unlocked')


var randomHexCodes = [];
// var currentPalette = [];

var hexData = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Event Listeners:
window.addEventListener('load', function() {
    newPaletteDisplay() //need alternative fucntion w.out conditional
});

lockImgSection.addEventListener('click', toggleLocks)


newPaletteButton.addEventListener('click', function() {
    newPaletteDisplay()
});

// eventHandlers & functions: 

function createColor() {
  var color = {
    hexcode: createHexCode(),
    isLocked: false
  }
  return color;
}

function createHexCode() {
  var hexCharacters = [];
  for (var i = 0; i < 6; i++) {
    hexCharacters.push(hexData[Math.floor(Math.random() * hexData.length)])
  };
  var hexCode = `#${hexCharacters.join('')}`;
  return hexCode
  }

function newPaletteDisplay() {
  createNewPalette();
  changeBoxesColors();

}

function createNewPalette() {
  var newPalette = [];
  for (var i = 0; i < 5; i++) {
    newPalette.push(createColor());
  } currentPalette = newPalette
};

function changeBoxesColors() {
    for (var i=0; i < currentPalette.length; i++) {
      if (currentPalette[i].isLocked === false) {
        boxes[i].style.backgroundColor = currentPalette[i].hexcode;
    }
  } changeHexCaptions()
};

function changeHexCaptions() {
  for(var i = 0; i < hexCaption.length; i++) {
    hexCaption[i].innerText = currentPalette[i].hexcode
  };
};

function toggleLocks(event) {
  for (var i = 1; i < 6; i++) {
    if (event.target.parentNode.id === `box${i}`) {
    document.getElementById(`locked${i}`).classList.toggle('hidden');
      document.getElementById(`unlocked${i}`).classList.toggle('hidden');
    }
  } 
}
