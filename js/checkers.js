	/*----- constants -----*/
    const playerImg = {
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
    winner: false
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

    state.player = 'Brian';
    state.totalPoints.playerBrian = 0;
    state.totalPoints.playerJeff = 0;

render();
};

// function buildBoard() {
//     //two for loops - one for row one for column
// }

function selectPiece(event) {

        // identify tile being clicked
    const targetParentDiv = event.target.parentNode;
    const cellId = targetParentDiv.id;

    console.log(targetParentDiv);

 
    // access rows and columns
    const row = Number(cellId[1]);
    const column = Number(cellId[3]);
    // move up board
    const moveUpRow = row - 1;
    // move down board
    const moveDownRow = row + 1;

    // move left
    const moveLeftColumn = column - 1;
    // move right
    const moveRightColumn = column + 1;

    // move towards top of board
    const topDiagonalLeft = 'r' + moveUpRow + 'c' + moveLeftColumn;
    const topDiagonalRight = 'r' + moveUpRow + 'c' + moveRightColumn;

    // move towards bottom of board
    const bottomDiagonalLeft = 'r' + moveDownRow + 'c' + moveLeftColumn;
    const bottomDiagonalRight = 'r' + moveDownRow + 'c' + moveRightColumn;

    // jump towards top of board
    const topDiagonalLeftJump = 'r' + (moveUpRow - 1) + 'c' + (moveLeftColumn - 1);
    const topDiagonalRightJump =  'r' + (moveUpRow - 1) + 'c' + (moveRightColumn + 1);

    // jump towards bottom of board
    const bottomDiagonalLeftJump = 'r' + (moveDownRow + 1) + 'c' + (moveLeftColumn - 1);
    const bottomDiagonalRightJump = 'r' + (moveDownRow + 1) + 'c' + (moveRightColumn + 1);


    if (targetParentDiv.classList.contains('brianPiece')) {
        if (targetParentDiv.style.backgroundColor === 'blue') {
            targetParentDiv.style.backgroundColor = '';
            document.getElementById(topDiagonalLeft).style.backgroundColor = '';
            document.getElementById(topDiagonalRight).style.backgroundColor = '';
        } else {
            targetParentDiv.style.backgroundColor = 'blue';
            document.getElementById(topDiagonalLeft).style.backgroundColor = 'blue';
            document.getElementById(topDiagonalRight).style.backgroundColor = 'blue';
        };
    } else if (targetParentDiv.classList.contains('jeffPiece')) {
        if (targetParentDiv.style.backgroundColor === 'blue') {
            targetParentDiv.style.backgroundColor = '';
            document.getElementById(bottomDiagonalLeft).style.backgroundColor = '';
            document.getElementById(bottomDiagonalRight).style.backgroundColor = '';
        } else {
            targetParentDiv.style.backgroundColor = 'blue';
            document.getElementById(bottomDiagonalLeft).style.backgroundColor = 'blue';
            document.getElementById(bottomDiagonalRight).style.backgroundColor = 'blue';
        }
    };

    // if diagonal tiles have img do not style background color as blue

    if (targetParentDiv.classList.contains('brianPiece')) {

    }
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