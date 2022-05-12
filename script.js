const gameContainer = document.querySelector('#gamecontainer');


function createDivs(size) {
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

createDivs(16);