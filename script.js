const gameContainer = document.querySelector('#gamecontainer');

// 0 = grey, 1 = Random color
let colorChoice = 0;

function returnBackgroundColor() {
    if(colorChoice == 0) {
        return "background-color: grey";
    }
    else {
        // Credits: https://stackoverflow.com/questions/1484506/random-color-generator
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return `background-color: ${color}`;
    }
}

function createDivs(size) {
    while(gameContainer.firstChild) {
        gameContainer.removeChild(gameContainer.lastChild);
    }
    sizeRemember = size;
    gameContainer.style.cssText = `grid-template-columns: repeat(${size}, minmax(0, 1fr)); grid-template-rows: repeat(${size}, minmax(0, 1fr));`;
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('gamecube');
            div.addEventListener('mouseover', () => {
                div.style.cssText = returnBackgroundColor();
              });
            gameContainer.appendChild(div);
        }
    }
    
}
let sizeRemember = 0;
function askForSize() {
    const number = window.prompt('Give a number between 1-100. Otherwise defaults to 16.');

    if(/\D/.test(number)) {
        createDivs(16);
    }
    else if(parseInt(number) > 100 || parseInt(number) < 1 ) {
        createDivs(16);
    }
    else {
        createDivs(number)
    }
}

function reset() {
    createDivs(sizeRemember);
}

function normal() {
    colorChoice = 0;
}

function rainbow() {
    colorChoice = 1;
}


createDivs(16);