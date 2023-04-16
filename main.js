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
  savedPalettesContainer.addEventListener('click', deletePalette);


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
    savedSectionMsg.innerText = ''
    // for (var i=0; i=savedPalettes.length; i++) {
        savedPalettesContainer.innerHTML += `
        <section class="mini-container">
            <section class="mini-palette" style="background-color: ${currentPalette[0].hexcode}"></section>
            <section class="mini-palette" style="background-color: ${currentPalette[1].hexcode}"></section>
            <section class="mini-palette" style="background-color: ${currentPalette[2].hexcode}"></section>
            <section class="mini-palette" style="background-color: ${currentPalette[3].hexcode}"></section>
            <section class="mini-palette" style="background-color: ${currentPalette[4].hexcode}"></section>
            <img class="delete" id="${currentPalette.id}" src="src/delete.png">
        </section>
        `
    // }
  };

function deletePalette(event){
  console.log('savedPalettes:', savedPalettes)
  console.log('event.target.id:', parseInt(event.target.id))
  // for (var i=0; i<savedPalettes.length; i++){
    if (parseInt(event.target.id) === savedPalettes.id) {
      savedPalettes.splice(i, 1)
    }
  // event.target.id is coming back as undefined
  // (parseInt(event.target.id)) is coming back as NaN
}


  //id=${savedPalettes[i].id}


  // function deletePalette(event) {
  //   for (var i = 0; i < savedPalettes.length; i++){
  //     console.log(savedPalettes[i])
  //     if (event.target.id === savedPalettes[i].id) {
  //       savedPalettes.splice(i, 1);
  //     };
  //   }
  //   displaySavedPalettes()
  // };


  // function displaySavedPalettes() {
  //   savedSectionMsg.innerText = ''
  //   for (var i = 0; i < savedPalettes.length; i++) {
  //       savedPalettesContainer.innerHTML += `
  //       <section class="mini-container" id=${savedPalettes[i].id} >
  //           <section class="mini-palette" style="background-color: ${savedPalettes[i].box1.hexcode}"></section>
  //           <section class="mini-palette" style="background-color: ${savedPalettes[i].box2.hexcode}"></section>
  //           <section class="mini-palette" style="background-color: ${savedPalettes[i].box3.hexcode}"></section>
  //           <section class="mini-palette" style="background-color: ${savedPalettes[i].box4.hexcode}"></section>
  //           <section class="mini-palette" style="background-color: ${savedPalettes[i].box5.hexcode}"></section>
  //           <img class="delete" alt='deleteIcon' src="src/delete.png">
  //       </section>
  //       `
  //       console.log(savedPalettes)
  //   }
  // };


  // function deletePalette(event) {
  //   var savedPaletteID = parseInt(event.target.closest('.mini-container').id);
  //   for (var i = 0; i < savedPalettes.length; i++){
  //     if (savedPaletteID === savedPalettes[i].id) {
  //       savedPalettes.splice(i, 1);
  //     };
  //   } displaySavedPalettes()
  // }; 
  // why is savedPalettes array empty?





  // target the saved palettes section
  // we care about targetting the current index postion of our saved palettes array
    // we need to give each saved palette a specific ID to target
    // make an object with key value pair of ID when pushed into saved palette array
      // how do we make ID? 
      // how do we push our saved palette into that 

  // line 114 -- current palette. id ???
  