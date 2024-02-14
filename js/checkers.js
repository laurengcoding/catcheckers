// 	/*----- constants -----*/
//     const playerImg = {
//         brian: "img/brianface.png",
//         jeff: "img/jeffcheck.png"
//     };


// 	/*----- state variables -----*/
// const state = {
//     board: null,
//     player: '', // player 'brian' or 'jeff'
//     totalPoints: {
//         playerBrian: 0,
//         playerJeff: 0
//     },
//     winner: false
// };

// 	/*----- cached elements  -----*/
// const grassTiles = document.querySelectorAll('.grass');
// const jeffPiece = document.querySelectorAll('.jeffPiece');
// const brianPiece = document.querySelectorAll('.brianPiece');
// let topDiagonalLeft;
// let topDiagonalRight;
// let bottomDiagonalLeft;
// let bottomDiagonalRight;


// 	/*----- event listeners -----*/

// // listen for click on jeff/brian piece, run selectPiece function
// jeffPiece.forEach(function (jeff) {
//     jeff.addEventListener('click', selectPiece);
// });

// brianPiece.forEach(function (brian) {
//     brian.addEventListener('click', selectPiece);
// });

// grassTiles.forEach(function (tile) {
//     if (!tile.classList.contains('brianPiece') && !tile.classList.contains('jeffPiece')) {
//         tile.addEventListener('click', movePiece);
//     };
// });

// 	/*----- functions -----*/
// init();

// function init() {
//     state.board = [
//         ['jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff', 0],   // row 0
//         [0, 'jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff'],   // row1
//         ['jeff', 0, 'jeff', 0, 'jeff', 0, 'jeff', 0]    // row2
//         [0, 0, 0, 0, 0, 0, 0, 0],                       // row 3
//         [0, 0, 0, 0, 0, 0, 0, 0],                       // row 4
//         [0, 'brian', 0, 'brian', 0, 'brian', 0, 'brian'], // row 5
//         ['brian', 0, 'brian', 0, 'brian', 0, 'brian', 0], // row 6
//         [0, 'brian', 0, 'brian', 0, 'brian', 0, 'brian']  // row 7
//     ];

//     state.player = 'Brian';
//     state.totalPoints.playerBrian = 0;
//     state.totalPoints.playerJeff = 0;

// render();
// };


// function selectPiece(event) {

//         // identify tile being clicked
//     const targetParentDiv = event.target.parentNode;
//     const cellId = targetParentDiv.id;
 
//     // access rows and columns
//     const row = Number(cellId[1]);
//     const column = Number(cellId[3]);

//     // move up board
//     const moveUpRow = row - 1;
//     // move down board
//     const moveDownRow = row + 1;

//     // move left
//     const moveLeftColumn = column - 1;
//     // move right
//     const moveRightColumn = column + 1;

//     // move towards top of board
//     topDiagonalLeft = 'r' + moveUpRow + 'c' + moveLeftColumn;
//     topDiagonalRight = 'r' + moveUpRow + 'c' + moveRightColumn;


//     // move towards bottom of board
//     bottomDiagonalLeft = 'r' + moveDownRow + 'c' + moveLeftColumn;
//     bottomDiagonalRight = 'r' + moveDownRow + 'c' + moveRightColumn;

//     // jump towards top of board
//     const topDiagonalLeftJump = 'r' + (moveUpRow - 1) + 'c' + (moveLeftColumn - 1);
//     const topDiagonalRightJump =  'r' + (moveUpRow - 1) + 'c' + (moveRightColumn + 1);

//     // jump towards bottom of board
//     const bottomDiagonalLeftJump = 'r' + (moveDownRow + 1) + 'c' + (moveLeftColumn - 1);
//     const bottomDiagonalRightJump = 'r' + (moveDownRow + 1) + 'c' + (moveRightColumn + 1);


//     if (targetParentDiv.classList.contains('brianPiece')) {
//         if (targetParentDiv.style.backgroundColor === 'blue') {
//             targetParentDiv.style.backgroundColor = '';
//             document.getElementById(topDiagonalLeft).style.backgroundColor = '';
//             document.getElementById(topDiagonalRight).style.backgroundColor = '';
//         } else {
//             targetParentDiv.style.backgroundColor = 'blue';
//             document.getElementById(topDiagonalLeft).style.backgroundColor = 'blue';
//             document.getElementById(topDiagonalRight).style.backgroundColor = 'blue';
//         };
//     } else if (targetParentDiv.classList.contains('jeffPiece')) {
//         if (targetParentDiv.style.backgroundColor === 'blue') {
//             targetParentDiv.style.backgroundColor = '';
//             document.getElementById(bottomDiagonalLeft).style.backgroundColor = '';
//             document.getElementById(bottomDiagonalRight).style.backgroundColor = '';
//         } else {
//             targetParentDiv.style.backgroundColor = 'blue';
//             document.getElementById(bottomDiagonalLeft).style.backgroundColor = 'blue';
//             document.getElementById(bottomDiagonalRight).style.backgroundColor = 'blue';
//         }
//     };

//     // if diagonal tiles have img do not style background color as blue
    
//     if (createNewCat) {
//         event.target.style.display = 'none';
//     } else return;
// };

// function movePiece(event) {
//     console.log('Is this piece empty?');
//     createNewCat(event.target.id);

// };

// // Function to create a new cat
// function createNewCat(location, callback) {
//     const cell = document.getElementById(location);
//     // console.log(cell);
//     const newCat = document.createElement('img');
//     // Set the src attribute to the cat image
//     if (state.player === 'Brian') {
//         newCat.src = playerImg.brian;
//     } else if (state.player === 'Jeff') {
//         newCat.src = playerImg.jeff;
//     } else return;

//     cell.appendChild(newCat);
    
//     switchTurn();
//     };



 

// function playerMoves() {
// // if getWinner === false
//     // if canMoveBackwards === false
//          // insert rest of code
//     // else if canMoveBackwards
//         // insert rest of code here
//         // selectPiece();



// };

// // TODO:
// // potential functions:
// //     function CollectsPiece
// //         this could then be invoked in playerMoves
// //     function CanMoveBackwards
// //         this could be checked by invoking function in first line of playerMoves

// function switchTurn() {
//     grassTiles.forEach(function(tile) {
//         tile.style.backgroundColor = '';
//     });
//     if (state.player === 'Brian') {
//         state.player = 'Jeff';
//     } else {
//         state.player = 'Brian'
//     }
// };

// function getWinner() {

// };


// function render() {

// };