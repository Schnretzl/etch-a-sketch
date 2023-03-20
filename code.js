const board = document.querySelector('#grid');
let boardSize = 3;

function createBoard(size){
    let tileSize = parseFloat(500 / size);
    for(let row = 0; row < size; row++){
        for(let col = 0; col < size; col++){
            let square = document.createElement('div');
            square.setAttribute('id',"square" + row + col);
            square.style.height = tileSize + 'px';
            square.style.width = tileSize + 'px';
            document.addEventListener('mouseover', () => square.style.backgroundColor = 'black');
            board.appendChild(square);
        }
    }
}


createBoard(boardSize);