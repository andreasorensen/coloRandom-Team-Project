
// Variables:

var newPaletteButton = document.querySelector("#new-palette-button");
var hexCaption = document.querySelectorAll(".caption");
var boxes = document.querySelectorAll(".boxes");
var hexValues = []
var randomHexCodes = [];
var currentPalette = []; // this will have x5 of our new 
var lockImgSection = document.querySelector('.box')


var hexData = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Event Listeners:

window.addEventListener('load', function() {
    newPaletteDisplay() 
});

lockImgSection.addEventListener('click',toggleLocks)

newPaletteButton.addEventListener('click', function() {
    // createHexString();
    newPaletteDisplay()
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

// function hexCodesCh() {
//   for(var i = 0; i < hexCaption.length; i++) {
//     hexCaption[i].innerText = currentPalette[i];
//   };
//     console.log(hexCodesCh())
// };

function changeBoxesColors() {
  
  for (var i=0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = currentPalette[i]
  }
};

function newPaletteDisplay() {
  createNewPalette();
  // hexCodesCh();
  changeBoxesColors();
};

function toggleLocks(event) {
    for (var i = 1; i < 6; i++) {
        if (event.target.parentNode.id === `box${i}`) {
            document.getElementById(`locked${i}`).classList.toggle('hidden');
            document.getElementById(`unlocked${i}`).classList.toggle('hidden');
        }
    }
}


