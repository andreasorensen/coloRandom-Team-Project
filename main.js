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
var unlockedIcons = document.querySelectorAll('.unlocked')
var lockedIcons = document.querySelectorAll('.locked')

//Event Listeners:

window.addEventListener('load', loadPage);


newPaletteButton.addEventListener('click', populateNotLockedPalette);

savePaletteBtn.addEventListener('click', savePalettes); //caught TypeError: Cannot read properties of null (reading 'addEventListener')

// savedPalettesContainer.addEventListener('click', changeSavedDisplay);
// savedContainer.addEventListener('click', editPalette);


boxContainer.addEventListener("click", function(event) {
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
      isLocked: false,
      id:Date.now()
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

function changeIsLocked(event) {
    var targetID = parseInt(event.target.closest("div").id);
    console.log(parseInt(event.target.closest("div").id))
  if (event.target.classList.contains("unlocked")) {
   currentPalette[targetID].isLocked = true;
  } else {
    currentPalette[targetID].isLocked = false;
  }
};

function changeBoxesColors() {
    for (var i = 0; i < currentPalette.length; i++) {
        boxes[i].style.backgroundColor = currentPalette[i].hexcode;
        hexCaption[i].innerText = currentPalette[i].hexcode
    } 
}


function toggleLocks(event) {
  for (var i = 0; i < lockedIcons.length; i++) {    
    if(event.target.id === lockedIcons[i].id || event.target.id === unlockedIcons[i].id) {
      lockedIcons[i].classList.toggle('hidden')
      unlockedIcons[i].classList.toggle('hidden')
    }
  } changeIsLocked()
}

  
 function savePalettes() {
    // var savedPalettes = [];
    // for (var i = 0; i < currentPalette.length; i++) {
        savedPalettes.push(currentPalette);
    // };
    displaySavedPalettes();
    populateNotLockedPalette();
  };
  

  function displaySavedPalettes() {
    savedPalettesContainer.innerHTML = ''
  // if (savedPalettes.length == 0){
  //   savedSectionMsg.classList.remove('hidden')
  // } else {
        savedPalettesContainer.innerHTML += `
        <section class="mini-container" >
            <section class="mini-palette" style="background-color: ${currentPalette[0].hexcode}"></section>
            <section class="mini-palette" style="background-color: ${currentPalette[1].hexcode}"></section>
            <section class="mini-palette" style="background-color: ${currentPalette[2].hexcode}"></section>
            <section class="mini-palette" style="background-color: ${currentPalette[3].hexcode}"></section>
            <section class="mini-palette" style="background-color: ${currentPalette[4].hexcode}"></section>
            <img class="delete" id="${currentPalette.id}" src="src/delete.png">
        </section>
        `
    // }
    // };
    // savedSectionMsg.classList.add('hidden');
  };
  
  
  // function deletePalette(e) {
  //   if (e.target.className === 'delete') {
  //       savedPalettes.splice(e.target.dataset.indexNumber, 1);
  //   };
  // };
