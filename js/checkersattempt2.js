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
    brianPiece: document.querySelectorAll('.brian'),
    currentPlayer: document.querySelector('.currentPlayer')
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
    state.targets = [],

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


// attach movement direction to state.player instead of defining each movement



    // console.log(square, column);
    const upperLeftId = 'r' + (row - 1) + 'c' + (column - 1);
    const upperLeftJumpId = 'r' + (row - 2) + 'c' + (column - 2);
    const upperLeftCell = document.getElementById(upperLeftId);

    const upperRightId = 'r' + (row - 1) + 'c' + (column + 1);
    const upperRightJumpId = 'r' + (row - 2) + 'c' + (column + 2);
    const upperRightCell = document.getElementById(upperRightId);


    const lowerLeftId = 'r' + (row + 1) + 'c' + (column - 1);
    const lowerLeftJumpId = 'r' + (row + 2) + 'c' + (column - 2);
    const lowerLeftCell = document.getElementById(lowerLeftId);

    const lowerRightId = 'r' + (row + 1) + 'c' + (column + 1);
    const lowerRightJumpId = 'r' + (row + 2) + 'c' + (column + 2);
    const lowerRightCell = document.getElementById(lowerRightId);

    // store the values of 'jumped cells'
    const jumpedCellUpperLeft = upperLeftCell;
    const jumpedCellUpperRight = upperRightCell;
    const jumpedCellLowerLeft = lowerLeftCell;
    const jumpedCellLowerRight = lowerRightCell;


   // // possible movements object, keys are left and right
    // const movements = {
    //     brian: {
    //         left: ['r' + (row - 1) + 'c' + (column - 1), 'r' + (row + 1) + 'c' + (column - 1)],
    //         right: ['r' + (row - 1) + 'c' + (column + 1), 'r' + (row + 1) + 'c' + (column + 1)]
    //     },
    //     jeff: {
    //         left: ['r' + (row - 1) + 'c' + (column - 1), 'r' + (row + 1) + 'c' + (column - 1)],
    //         right: ['r' + (row - 1) + 'c' + (column + 1), 'r' + (row + 1) + 'c' + (column + 1)]
    //     }
    // };
    
    // // Assign movements based on the current player
    // if (state.player === 'brian') {
    //     state.movements = movements.brian;
    // } else if (state.player === 'jeff') {
    //     state.movements = movements.jeff;
    // };


    if (state.targets.includes(square.id)) {
        state.board[row][column] = state.player;
        console.log('new ' + state.player + ' has been created');
        const oldRow = state.selected[1];
        const oldColumn = state.selected[3];
        state.board[oldRow][oldColumn] = 0;
        state.selected = 0;
        state.targets = [];
        console.log('old one is gone');
        switchTurn();
    } else if (state.selected === square.id) {
        state.selected = 0;
        state.targets = [];

    } else if (state.board[row][column] === 0 || state.board[row][column] !== state.player) {
        return;

    } else {
        state.selected = square.id;

        if (state.player === 'brian') {
        state.targets = [upperLeftId, upperRightId];
        // // // successful jump!
        // if (!upperLeftCell.classList.contains(state.player)) {
        //      state.targets = [upperLeftJumpId, upperRightId];
        //      if (state.targets[0]) {
        //         jumpedCellUpperLeft.classList.remove('jeff');
        //      } else if (!upperRightCell.classList.contains(state.player)) {
        //         state.targets = [upperLeftId, upperRightJumpId];
        //         if (state.targets[1]) {
        //             jumpedCellUpperRight.classList.remove('jeff');
        //         }
        //      } else return;

        } else {
            state.targets = [lowerLeftId, lowerRightId];
        }

    };


    // if (square.classList.contains(state.player)) {
    //             if (!upperLeftCell.classList.contains(state.player) || 
    //     !upperLeftCell.classList.contains(state.player) && !upperRightCell.classList.contains(state.player) 
    //     || !upperRightCell.classList.contains(state.player)) {
    //         square.style.backgroundColor = '#8aa36553';
    //         upperLeftCell.style.backgroundColor = '#8aa36553';
    //         upperRightCell.style.backgroundColor = '#8aa36553';

    //     } else if (!upperLeftCell.classList.contains(state.player) || 
    //     !upperLeftCell.classList.contains(state.player)) {
    //         square.style.backgroundColor = '#8aa36553';
    //         upperLeftCell.style.backgroundColor = '#8aa36553';

    //     } else if (!upperRightCell.classList.contains(state.player) 
    //     || !upperRightCell.classList.contains(state.player)) {
    //         square.style.backgroundColor = '#8aa36553';
    //         upperRightCell.style.backgroundColor = '#8aa36553';
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
            } else {
                cellDiv && cellDiv.classList.remove('brian', 'jeff');
            };
            // TODO: there has to be something i can add here to check
                // if a piece has jumped, remove the opponent's classList
                //const capturedPiece = 
                // if (cellValue !== state.player && cellValue !== 0) {
                    //
                // }

        });

    });
};

function renderControls() {

};

function renderMessage() {


};

function switchTurn() {
    // elements.grassTiles.forEach(function(tile) {
    //     tile.style.backgroundColor = '';
    // });
    if (state.player === 'brian') {
        state.player = 'jeff';
    } else {
        state.player = 'brian';
    }
};