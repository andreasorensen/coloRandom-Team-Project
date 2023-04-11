var newPaletteButton = document.querySelector("#new-palette-button");


var boxes = document.querySelector(".box");

var randomHexCode;
// var hexValues = [];
var currentPalette = []; // this will have x5 of our new hexcodes

newPaletteButton.addEventListener('click', function() {
    createHexCode(6);
});

  
  function createHexCode(size) {
    var hexValues = [];
    var hexCharacters = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < size; i++) {
        hexValues.push(hexCharacters[Math.floor(Math.random() * hexCharacters.length)]);
      }
      console.log(`#${hexValues.join('')}`);
    }


    // return `#${hexValues.join('')}`




  // function to create random hex code
    //within that function we will return the code 

    /// use the inner.HTML & replace the hardcoded .caption class with the newly generated hex codes 
    //