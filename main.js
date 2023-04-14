// Variables:

var randomHexCodes = [];

var hexData = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var currentPalette = [];
var boxes = document.querySelectorAll(".boxes");
var newPaletteButton = document.querySelector("#new-palette-button");
var hexCaption = document.querySelectorAll(".captions");
var boxContainer = document.querySelector('.box-container');
var paletteSection = document.querySelector(".color-palettes");
var lockedIcons = document.querySelectorAll('.locked')
var unlockedIcons = document.querySelectorAll('.unlocked')
var hiddenIcons = document.querySelectorAll('.hidden')


//Event Listeners:

window.addEventListener('load', loadPage);

// newPaletteButton.addEventListener('click', function(event) {
//   if (event.target.classList.contains('hidden')) {
//     currentPalette[i].isLocked=true
//   } changeNotLockedPalette();
// })
  // changeIsLocked);

newPaletteButton.addEventListener('click', changeNotLockedPalette)

paletteSection.addEventListener("click", toggleLocks);

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

function changeNotLockedPalette() {
  for (var i = 0; i < 5; i++) {
    if (!currentPalette[i].isLocked) {
        currentPalette[i] = createColor();
    };
  };  changeBoxesColors();
};

function changeIsLocked(event) {
  if (event.target.classList.contains("unlocked")) {
    var targetID = parseInt(event.target.closest(".boxes").id);
   currentPalette[targetID].isLocked = true;
  };
  // toggleLocks(event.target)
};

// function changeIsLocked() {
//   for (var i=0; i<lockedIcons.length; i++) {
//     console.log(lockedIcons)
//     if (lockedIcons.classList.contains('hidden')){
//       currentPalette[i].isLocked = true;
//     }
//   }
// }

function changeBoxesColors() {
    for (var i = 0; i < currentPalette.length; i++) {
        boxes[i].style.backgroundColor = currentPalette[i].hexcode;
  } changeHexCaptions()
};

function changeHexCaptions() {
  for(var i = 0; i < hexCaption.length; i++) {
    hexCaption[i].innerText = currentPalette[i].hexcode
  };
};

function toggleLocks(event) {
  for (var i = 0; i < lockedIcons.length; i++) {    
    if(event.target.id === lockedIcons[i].id || event.target.id === unlockedIcons[i].id) {
      lockedIcons[i].classList.toggle('hidden')
      unlockedIcons[i].classList.toggle('hidden')
    }
  } changeIsLocked()
}

// function toggleLocks(event) {
//   for (var i = 0; i < 6; i++) {
//     if (event.target.parentNode.id === `${i}`){
//       document.getElementById(`locked${i}`).classList.toggle('hidden');
//       document.getElementById(`unlocked${i}`).classList.toggle('hidden');
//     }
//   }
// };
  // var targetID = parseInt(event.target.closest(".boxes").id);

  // if (targetID.contains('hidden')) {
  //   targetID.remove('hidden');
  // } else {
  //   targetID.add('hidden');
  // };

  // if (event.target.classList.contains("locked") && currentPalette[targetID].isLocked) {

      // event.target.src = "assets/locked.png"

  // } else if (event.target.classList.contains("unlocked") && !currentPalette[targetID].isLocked) {
  //     event.target.src = "assets/unlocked.png"
  // } 
// };

// function newPaletteDisplay() {
//   populateNotLockedPalette();
//   // changeBoxesColors();
// }
