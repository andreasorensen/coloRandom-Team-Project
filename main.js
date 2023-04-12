var newPaletteButton = document.querySelector("#new-palette-button");
var boxes = document.querySelector(".box");

var hexValues = []
var randomHexCodes = [];
var currentPalette = []; // this will have x5 of our new hexcodes

window.addEventListener('load', function() {
    createNewPalette();
});

newPaletteButton.addEventListener('click', function() {
    // createHexString();
    console.log(hexValues)
    createNewPalette();
});
  
function createHexCode() {
    var hexCharacters = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < 6; i++) {
        hexValues.push(hexCharacters[Math.floor(Math.random() * hexCharacters.length)])
      }  return `#${hexValues.join('')}`;
    };

function createNewPalette() {
    newPalette = [];
    for (var i = 0; i < 5; i++) {
        newPalette.push(createHexCode());
    }
        currentPalette = newPalette;
        console.log(newPalette)
      }




    // need to push the joined hex values into a new array, then repeat to made more hex codes ...? 


    // for (var i = 0; i < currentPalette.length; i++) {
    //     if (currentPalette.length < 5) {
    //         createHexCode(6) 

    // }

    // }




    // function displayNewPalette() {
    //     for (var i = 0; i < currentPalette.length; i++) {
    //       boxes[i].style.backgroundColor = currentPalette[i];
    //     };
    //   };
      