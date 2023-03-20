const board = document.querySelector('#grid');
let boardSize = 16;
createBoard(boardSize);
changeBoardSize();

function createBoard(size){
    let tileSize = parseFloat(500 / size);
    for(let row = 0; row < size; row++){
        for(let col = 0; col < size; col++){
            let square = document.createElement('div');
            square.setAttribute('id',"square" + row + col);
            square.style.height = tileSize + 'px';
            square.style.width = tileSize + 'px';
            square.addEventListener('mouseover', () => square.style.backgroundColor = 'black');
            board.appendChild(square);
        }
    }
}

function changeBoardSize(){
    let newSizeButton = document.querySelector('#setSize');
    let newSize = 0;
    newSize = parseInt(newSize);
    newSizeButton.addEventListener('click', () => {
        prompt("Size for new board? (1-100)", newSize)
        while((newSize >= 1) && (newSize <= 100)){
            alert("Size must be between 1 and 100!");
            prompt("Size for new board? (1-100)", newSize);
        }
        clearBoard();
        createBoard(newSize);
    })
}