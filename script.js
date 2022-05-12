const gameContainer = document.querySelector('#gamecontainer');


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
                div.style.cssText = "background-color: grey;"
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


createDivs(16);