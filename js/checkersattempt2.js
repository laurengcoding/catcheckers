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

// source: r4c3 (eg where the actual piece is)
// direction: -1 (up screen), +1 (down screen)
function findTargets(source, direction) {
    const row = Number(source[1]);
    const column = Number(source[3]);

    return [
        'r' + (row + direction) + 'c' + (column - 1),
        'r' + (row + direction) + 'c' + (column + 1)
    ]
};

function identifyOpponent() {
    const opponentTargets = [];
    const opponent = state.player === 'brian' ? 'jeff' : 'brian';
    for (let i = 0; i < state.targets.length; i++) {
      const target = state.targets[i];
      console.log(state.targets);
      console.log(target);
      const row = Number(target[1]);
      const column = Number(target[3]);

        if (state.board[row][column] === opponent) {
        console.log('opponent piece found at ', target);
       // state.targets.splice(i, 1);
        // state.targets[i] = '';
        const newTargets = findTargets(target, state.player === 'brian' ? -1 : 1);
        opponentTargets.push(...newTargets);
        };
    };

    const validTargets = opponentTargets.filter(function(newTarget) {
        const row = Number(newTarget[1]);
        const column = Number(newTarget[3]);
        return !state.board[row][column];
    });
    console.log({opponentTargets, validTargets});
    return validTargets;
};


function handleClick(event) {
    // console.log('i have clicked')
    const square = event.target;
    console.log(square); // - returns html div
    const row = Number(square.id[1]);
    const column = Number(square.id[3]);

    if (state.targets.includes(square.id)) {
        console.log('test');
        state.board[row][column] = state.player;
        if (state.selected !== null) {
            const oldRow = state.selected[1];
            const oldColumn = state.selected[3];
            state.board[oldRow][oldColumn] = 0;
        };
        // if (opponentPiece between selected and square.id) {remove opponentPiece}
        const opponentTarget = identifyOpponent();
        console.log(opponentTarget);
        if (opponentTarget) {
        opponentTarget.forEach(function(target) {
            const opponentRow = Number(target[1]);
            const opponentColumn = Number(target[3]);
            state.board[opponentRow][opponentColumn] = 0;
            state.targets[0].innerHTML = '';
            console.log(target);
            });
        };
        state.selected = null;
        state.targets = [];
        // console.log('old one is gone');
        switchTurn();
        } else if (state.selected === square.id) {
        state.selected = null;
        state.targets = [];

        } else if (state.board[row][column] === 0 || state.board[row][column] !== state.player) {
        return;

        } else {
        state.selected = square.id;

        state.targets = findTargets(square.id, state.player === 'brian' ? -1 : 1);
        const opponentTargets = identifyOpponent();
        state.targets = [...state.targets, ...opponentTargets];
        console.log(state.targets);
        state.targets[0].innerHTML = '';
    }
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
                cellDiv && cellDiv.classList.remove('brian', 'jeff', 'target');
            };
            if (cellDiv && state.targets.includes(cellId)) {
                cellDiv.classList.add('target');
            } else {
                cellDiv && cellDiv.classList.remove('target');
            };


        });

    });
};

function renderControls() {
    elements.currentPlayer.src = state.player === 'brian' ? IMG.brian : IMG.jeff;
};

function renderMessage() {
// i planned on doing this but you can't really win the game if you can't collect a piece lol

};

function switchTurn() {
    if (state.player === 'brian') {
        state.player = 'jeff';
    } else {
        state.player = 'brian';
    }
};