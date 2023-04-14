// Variables:

var randomHexCodes = [];

var hexData = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var currentPalette = [];
var boxes = document.querySelectorAll(".boxes");
var newPaletteButton = document.querySelector("#new-palette-button");
var hexCaption = document.querySelectorAll(".captions");
var boxContainer = document.querySelector('.box-container');
var paletteSection = document.querySelector(".color-palettes");

//Event Listeners:

window.addEventListener('load', loadPage);
newPaletteButton.addEventListener('click', newPaletteDisplay);
// boxes.addEventListener('click', toggleLocks);

paletteSection.addEventListener("click", function(event) {
  populateNotLockedPalette(event);
  changeIsLocked(event)
});

// eventHandlers & functions: 

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

  console.log(currentPalette)

  for (var i = 0; i < 5; i++) {
    if (!currentPalette[i].isLocked) {

      console.log(currentPalette)

        currentPalette[i] = createColor();
    };
  };
};

function changeBoxesColors() {
    for (var i = 0; i < currentPalette.length; i++) {
      // if (currentPalette[i].isLocked === false) {
        //console.log(boxes[i])
        boxes[i].style.backgroundColor = currentPalette[i].hexcode;
    // }
  } changeHexCaptions()
};

function changeHexCaptions() {
  for(var i = 0; i < hexCaption.length; i++) {
    hexCaption[i].innerText = currentPalette[i].hexcode
  };
};

// function toggleLocks(event) {
//   for (var i = 1; i < 6; i++) {
//     if (event.target.parentNode.id === `box${i}`) {
//       currentPalette[i].locked = !currentPalette[i].locked;
//       document.getElementById(`locked${i}`).classList.toggle('hidden');
//       document.getElementById(`unlocked${i}`).classList.toggle('hidden');
//     }
//   } 
// };

function toggleLocks(event) {

  //var targetID = parseInt(event.target.closest(".boxes").id);
  
  var targetID = event.target.closest(".boxes").id;

  if (event.target.classList.contains('hidden')) {
    event.target.classList.remove('hidden');
  }else{
    event.target.classList.add('hidden');
  };

  if (event.target.classList.contains("locked") && currentPalette[targetID].isLocked) {
      event.target.src = "assets/locked.png"
  } else if (event.target.classList.contains("unlocked") && !currentPalette[targetID].isLocked) {
      event.target.src = "assets/unlocked.png"
  } 
};

function changeIsLocked(event) {
  if (event.target.classList.contains("unlocked")) {

    var targetID = parseInt(event.target.closest(".boxes").id);
    
    console.log(currentPalette[targetID])

    // currentPalette[targetID].isLocked = !currentPalette[targetID].isLocked;
   currentPalette[targetID].isLocked = true;
  };
  toggleLocks()
};

function newPaletteDisplay() {
  currentPalette = populateNotLockedPalette();
  changeHexCaptions();
  changeBoxesColors();
}

function loadPage() {
  createNewPalette();
  changeHexCaptions();
  changeBoxesColors();
}