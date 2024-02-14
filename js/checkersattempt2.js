	/*----- constants -----*/

 const IMG = {
    brian: "img/brianface.png",
    jeff: "img/jeffcheck.png"
    };


console.log(playerImg.brian);

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
    grassTiles: document.querySelectorAll('.grass')

}


    /*----- event listeners -----*/



    /*----- functions -----*/

init();

function init() {
    state.board = [
        ['jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff', 0],   // row 0
        [0, 'jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff'],   // row1
        ['jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff', 0]    // row2
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
}

function renderBoard() {
    state.board.forEach(function(rowArr, rowIndex) {
        // iterate over cells in current row ie rowArr
        rowArr.forEach(function(cellValue, columnIndex) { //cellValue is whether the cell is 0, jeff or brian
           // console.log(columnIndex, rowIndex, cellValue);
            const cellId = 'r' + rowIndex + 'c' + columnIndex;
            // select proper div
            const cellDiv = document.getElementById(cellId);
            // console.log(cellDiv); 
            cellDiv.style.
        });

    })
};

function renderControls() {

};

function renderMessage() {

};