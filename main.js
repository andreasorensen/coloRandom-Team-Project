// Variables:

var randomHexCodes = [];
var hexData = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var currentPalette = [];

var savedPalettes = [];

var boxes = document.querySelectorAll(".boxes");
var newPaletteButton = document.querySelector("#new-palette-button");
var hexCaption = document.querySelectorAll(".captions");
var boxContainer = document.querySelector('.box-container');
var savePaletteBtn = document.querySelector('#save-palette-button');
var savedPalettesContainer = document.querySelector('#saved-palettes');
var savedSectionMsg = document.querySelector('h4');
var paletteSection = document.querySelector(".color-palettes");
var unlockedIcons = document.querySelectorAll('.unlocked');
var lockedIcons = document.querySelectorAll('.locked');

//Event Listeners:

window.addEventListener('load', loadPage);

newPaletteButton.addEventListener('click', populateNotLockedPalette);

// savedPalettesContainer.addEventListener('click', deletePalette);

savePaletteBtn.addEventListener('click', savePalettes);

// savedPalettesContainer.addEventListener('click', deletePalette);

boxContainer.addEventListener("click", function(event) {
    toggleLocks(event)
  changeIsLocked(event)
});

// eventHandlers & functions:
function loadPage() {
  createNewPalette();
  changeBoxesColors();
};

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
      isLocked: false,
    }
    return color;
  };

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
};

function changeIsLocked(event) {
    var targetID = parseInt(event.target.closest("div").id);
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
  };

  var savedPalettes = [];
  var savePaletteBtn = document.querySelector('#save-palette-button');
  var savedPalettesContainer = document.querySelector('#saved-palettes');
  var savedSectionMsg = document.querySelector('h4');
  var paletteSection = document.querySelector(".color-palettes");

  savePaletteBtn.addEventListener('click', savePalettes);

  savedPalettesContainer.addEventListener('click', function(event){
    if (event.target.classList.contains('delete')) {
    deletePalette(event)
    }
  });



  function savePalettes() {
    var savedPalette = {
      box1: currentPalette[0],
      box2: currentPalette[1],
      box3: currentPalette[2],
      box4: currentPalette[3],
      box5: currentPalette[4],
      id: Math.floor(Math.random() * 1000)
     }; 
    savedPalettes.push(savedPalette);
    displaySavedPalettes();
  };

  function displaySavedPalettes() {
    if (!savedPalettes.length){
      savedPalettesContainer.innerHTML = `<h4>No saved palettes yet!</h4>`;
    } else { 
      savedPalettesContainer.innerText = ''
      for (var i=0; i<savedPalettes.length; i++){
          savedPalettesContainer.innerHTML += `
            <section class="mini-container" id=${savedPalettes[i].id}>
                <section class="mini-palette" style="background-color: ${savedPalettes[i].box1.hexcode}"></section>
                <section class="mini-palette" style="background-color: ${savedPalettes[i].box2.hexcode}"></section>
                <section class="mini-palette" style="background-color: ${savedPalettes[i].box3.hexcode}"></section>
                <section class="mini-palette" style="background-color: ${savedPalettes[i].box4.hexcode}"></section>
                <section class="mini-palette" style="background-color: ${savedPalettes[i].box5.hexcode}"></section>
                <img class="delete" src="src/delete.png" alt="delete-cross">
            </section>
            `
      }
    }
  };

function deletePalette(event){
  var savedPaletteID = parseInt(event.target.closest('.mini-container').id)
  for (var i=0; i < savedPalettes.length; i++){
    console.log('savedPalettes[i].id:', savedPalettes[i].id)
    console.log('savedPalettes:', savedPalettes)
    console.log('savedPaletteID:', savedPaletteID)
    if (savedPaletteID === savedPalettes[i].id) {
      savedPalettes.splice(i, 1)
    } console.log(savedPalettes)
  }
  displaySavedPalettes()
}  


// why is it repeating / adding more when I click the delete (only when there are more than one elements in the savedPalettes array)
