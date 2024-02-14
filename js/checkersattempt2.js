	/*----- constants -----*/

 const IMG = {
    brian: "img/brianface.png",
    jeff: "img/jeffcheck.png"
    };



    /*----- state variables -----*/

const state = {
    board: null,
    player: '', // player 'brian' or 'jeff'
    totalPoints: {
        playerBrian: 0,
        playerJeff: 0
    },
    selected: null,
    targets: [],
    winner: false
};


    /*----- cached elements  -----*/

const elements = {
    grassTiles: document.querySelectorAll('.grass'), //does this need to be an array for handleClick function
    jeffPiece: document.querySelectorAll('.jeff'),
    brianPiece: document.querySelectorAll('.brian')
};



    /*----- event listeners -----*/
elements.grassTiles.forEach(function(piece) {
    piece.addEventListener('click', handleClick);
});



    /*----- functions -----*/

init();

function init() {
    state.board = [
        ['jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff', 0],   // row 0
        [0, 'jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff'],   // row1
        ['jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff', 0],   // row2
        [0, 0, 0, 0, 0, 0, 0, 0],                       // row 3
        [0, 0, 0, 0, 0, 0, 0, 0],                       // row 4
        [0, 'brian', 0, 'brian', 0, 'brian', 0, 'brian'], // row 5
        ['brian', 0, 'brian', 0, 'brian', 0, 'brian', 0], // row 6
        [0, 'brian', 0, 'brian', 0, 'brian', 0, 'brian']  // row 7
    ];

    state.player = 'brian';
    state.totalPoints.playerBrian = 0;
    state.totalPoints.playerJeff = 0;
    state.selected = null;
    state.targets = []

   render();
};

function render() {
    renderBoard();
    renderControls();
    renderMessage();
};

function handleClick(event) {
    // console.log('i have clicked')
    const square = event.target;
    console.log(square); // - returns html div
    const row = Number(square.id[1]);
    const column = Number(square.id[3]);

    // console.log(square, column);
    const upperLeftId = 'r' + (row - 1) + 'c' + (column - 1);
    const upperLeftCell = document.getElementById(upperLeftId);

    const upperRightId = 'r' + (row - 1) + 'c' + (column + 1);
    const upperRightCell = document.getElementById(upperRightId);

    const lowerLeftId = 'r' + (row + 1) + 'c' + (column - 1);
    const lowerLeftCell = document.getElementById(lowerLeftId);

    const lowerRightId = 'r' + (row + 1) + 'c' + (column + 1);
    const lowerRightCell = document.getElementById(lowerRightId);

    if (state.targets.includes(square.id)) {
        state.board[row][column] = 'brian';
        console.log('new ' + state.board[row][column] + ' has been created');
        const oldRow = state.selected[1];
        const oldColumn = state.selected[3];
        state.board[oldRow][oldColumn] = 0;
        if (state.board[oldRow][oldColumn] === 0) {
            square.classList.remove('brian');
        };
       //  const deleteMovedCat = state.board[oldRow][oldColumn] = 0;
        // deleteMovedCat.classList.remove('brian');
        // console.log('old ' + deleteMovedCat + ' has been deleted?');
        state.selected = 0;
        state.targets = [];
    } else if (state.selected === square.id) {
        state.selected = 0;
        state.targets = [];
    } else if (state.board[row][column] === null) {
        return;
    } else {
        state.selected = square.id;
        state.targets = [upperLeftId, upperRightId];
    }

    render();



// if (state.targets.includes(square.id)) {
//     state.board[row][column] = 'cat';
//     state.targets = [];
//     const oldRow = state.selected[1];
//     const oldColumn = state.selected[3];
//     state.board[oldRow][oldColumn] = null;
// } else if (state.selected === square.id) {
//     state.selected = null;
//     state.targets = [];
// } else if (state.board[row][column] === null) {
//     return;
// } else {
//     state.selected = square.id;
//     state.targets = [
//         upperLeftCell,
//         upperRightCell
//     ];
// }

    


    // if (square.classList.contains('brian')) {

    //     if (!upperLeftCell.classList.contains('brian') || 
    //     !upperLeftCell.classList.contains('jeff') && !upperRightCell.classList.contains('brian') 
    //     || !upperRightCell.classList.contains('jeff')) {
    //         square.style.backgroundColor = 'blue';
    //         upperLeftCell.style.backgroundColor = 'blue';
    //         upperRightCell.style.backgroundColor = 'blue';

    //     } else if (!upperLeftCell.classList.contains('brian') || 
    //     !upperLeftCell.classList.contains('jeff')) {
    //         square.style.backgroundColor = 'blue';
    //         upperLeftCell.style.backgroundColor = 'blue';

    //     } else if (!upperRightCell.classList.contains('brian') 
    //     || !upperRightCell.classList.contains('jeff')) {
    //         square.style.backgroundColor = 'blue';
    //         upperRightCell.style.backgroundColor = 'blue';
    //     } else return;
    // };

    // if (square.classList.contains('jeff')) {
    //     square.style.backgroundColor = 'blue';
    //     if (!lowerLeftCell.classList.contains('brian') && 
    //     !lowerLeftCell.classList.contains('jeff') || !lowerRightCell.classList.contains('brian') 
    //     || !lowerRightCell.classList.contains('jeff')) {
    //         lowerLeftCell.style.backgroundColor = 'blue';
    //         lowerRightCell.style.backgroundColor = 'blue';
    //     } else return;
    // };
    render();
};

function renderBoard() {
    state.board.forEach(function(rowArr, rowIndex) {
        // iterate over cells in current row ie rowArr
        rowArr.forEach(function(cellValue, columnIndex) { //cellValue is whether the cell is 0, jeff or brian
           // console.log(columnIndex, rowIndex, cellValue);
            const cellId = 'r' + rowIndex + 'c' + columnIndex;
            // select proper div
            const cellDiv = document.getElementById(cellId);
            // console.log(cellDiv); 
            if (cellValue) {
            cellDiv.classList.add(cellValue);
            };

        });

    });
};

function renderControls() {

};

function renderMessage() {

};

function switchTurn() {

};