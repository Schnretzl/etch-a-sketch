const board = document.querySelector('#grid');
let boardSize = 3;

function createBoard(size){
    for(let row = 0; row < size; row++){
        for(let col = 0; col < size; col++){
            let square = document.createElement('div');
            square.className += "square" + col + row;
            board.appendChild(square);
        }
    }
}

function changeColor(){}

createBoard(boardSize);