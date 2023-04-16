// Variables:

var randomHexCodes = [];

var hexData = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var currentPalette = [];
var boxes = document.querySelectorAll(".boxes");
var newPaletteButton = document.querySelector("#new-palette-button");
var hexCaption = document.querySelectorAll(".captions");
var boxContainer = document.querySelector('.box-container');
var paletteSection = document.querySelector(".color-palettes");
var unlockedIcons = document.querySelectorAll('.unlocked')
var lockedIcons = document.querySelectorAll('.hidden')

//Event Listeners:

window.addEventListener('load', loadPage);

newPaletteButton.addEventListener('click',   populateNotLockedPalette);

paletteSection.addEventListener("click", function(event) {
    toggleLocks(event)
  changeIsLocked(event)
});

// eventHandlers & functions: 

function loadPage() {
  createNewPalette();
  changeBoxesColors();
}

function createHexCode() {
  var hexCharacters = [];
  for (var i = 0; i < 6; i++) {
    hexCharacters.push(hexData[Math.floor(Math.random() * hexData.length)])
  };
  var hexCode = `#${hexCharacters.join('')}`;
  return hexCode
  };

  function createColor() {
    var color = {
      hexcode: createHexCode(),
      isLocked: false
    }
    return color;
  }

function createNewPalette() {
  var newPalette = [];
  for (var i = 0; i < 5; i++) {
    newPalette.push(createColor());
  } currentPalette = newPalette
};

function populateNotLockedPalette() {
  for (var i = 0; i < 5; i++) {
    if (!currentPalette[i].isLocked) {
        currentPalette[i] = createColor();
    };
  };  changeBoxesColors();
};

function changeBoxesColors() {
    for (var i = 0; i < currentPalette.length; i++) {
        boxes[i].style.backgroundColor = currentPalette[i].hexcode;
        hexCaption[i].innerText = currentPalette[i].hexcode
    } 
}

function changeIsLocked(event) {
    var targetID = parseInt(event.target.closest(".boxes").id);
  if (event.target.classList.contains("unlocked")) {
   currentPalette[targetID].isLocked = true;
  } else {
    currentPalette[targetID].isLocked = false;
  }
};

function toggleLocks(event) {
    for (var i = 0; i < lockedIcons.length; i++) {    
      if(event.target.id === lockedIcons[i].id || event.target.id === unlockedIcons[i].id) {
        lockedIcons[i].classList.toggle('hidden')
        unlockedIcons[i].classList.toggle('hidden')
      }
    }
  }

 