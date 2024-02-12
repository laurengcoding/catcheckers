	/*----- constants -----*/


	/*----- state variables -----*/
const state = {
    board: null,
    player: '', // player 'brian' or 'jeff'
    totalPoints: {
        playerBrian: 0,
        playerJeff: 0
    },
    winner: false
    // should there be state for playerPieces?
};

	/*----- cached elements  -----*/
const grassTiles = document.querySelectorAll('.grass');
const jeffPiece = document.querySelectorAll('.jeffPiece');
const brianPiece = document.querySelectorAll('.brianPiece');


	/*----- event listeners -----*/

// listen for click on jeff/brian piece, run selectPiece function
jeffPiece.forEach(function (jeff) {
    jeff.addEventListener('click', selectPiece);
});

brianPiece.forEach(function (brian) {
    brian.addEventListener('click', selectPiece);
});

	/*----- functions -----*/
init();

function init() {
    // should board be initialised as an object or 2D array?
        //TODO: check with joel or CJ
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
   // console.log(state.board[0][0]);

    
    state.player = 'Brian';
    state.totalPoints.playerBrian = 0;
    state.totalPoints.playerJeff = 0;

render();
};

function selectPiece(event) {
    const getParent = event.target.parentNode;
    const cellId = getParent.id;
    // console.log(cellId);
    const row = cellId[1];
    const column = cellId[3];
    // this gives the html div of the grass tile clicked on:
        // console.log(grassTiles[row]);

   // event.target.style.backgroundColor = 'blue';

     // target the clicked piece, check row and column (cell value const?)
    // if brian:
        // check if selected row - 1 tile values = null
            // and selected column -1 and/or +1 = 0
        // then
    // background colour of selected tile and two diagonally adjacent tiles change

    // if jeff:
         // check if selected row + 1 tile values = 0
        // and selected column -1 and/or +1 = 0
        // background colour of selected tile and two diagonally adjacent tiles change
};

function playerMoves() {
// if getWinner === false
    // if canMoveBackwards === false
         // insert rest of code
    // else if canMoveBackwards
        // insert rest of code here
        // selectPiece();



};

//TODO:
// potential functions:
    // function CollectsPiece
        // this could then be invoked in playerMoves
    // function CanMoveBackwards
        // this could be checked by invoking function in first line of playerMoves

function switchTurn() {

};

function getWinner() {

};


function render() {

};