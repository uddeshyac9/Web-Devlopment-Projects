let gameInfo = document.querySelector(".gameInfo");
let boxes  = document.querySelectorAll(".box");
let newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;
const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Initialize the game
function initialize() {
   // Set Current Player to X 
   currentPlayer = "X";
   newGameBtn.classList.remove("active");
   // Empty Kar Do Boxes 
    gameGrid = ['','','','','','','','',''];
    // Make Boxes Empty
    
    boxes.forEach((box,index) => {
        box.textContent = "";
        box.style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    });
    gameInfo.innerText = `Current Player : ${currentPlayer}`;
   
 }
// call the function 
initialize(); 

// handleClick function
function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // swap turn 
        swapTurn();
        // check koi jeet to nhi gya
        checkGameOver(); 
    }
} 
function swapTurn() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
  //  UI Update 
  gameInfo.innerText = `Current Player : ${currentPlayer}`;
//   boxes[index].innerText = currentPlayer;
}

function checkGameOver() {
    let winner = ""; // Initialize a variable to store the winner
    
    winningPositions.forEach((position) => {
        // Check if all 3 boxes in the current winning position are non-empty and have the same value
        if (
            gameGrid[position[0]] !== "" &&
            gameGrid[position[1]] !== "" &&
            gameGrid[position[2]] !== "" &&
            gameGrid[position[0]] === gameGrid[position[1]] &&
            gameGrid[position[1]] === gameGrid[position[2]]
        ) {
            // Disable pointer events for all boxes
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            // Assign the winner based on the value in the winning position
            winner = gameGrid[position[0]];

            // Mark the winning boxes with a "win" class
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    if (winner !== "") {
        gameInfo.innerText = `Player ${winner} wins!`; // Display the winner
        newGameBtn.classList.add("active"); // Enable new game button
    }
    
   // Here is not winner yet Check for tie
   let fillCount = 0;
   gameGrid.forEach(box => {
    if (box !== "") {
        fillCount++;
    };
    if (fillCount === 9) {
        gameInfo.innerText = "Game Tied !"; // Display Game Tied
        newGameBtn.classList.add("active"); // Enable new game button
    }
    
   });
}


// Add Event Listener to all Boxes to Get Player Input
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
    
})


newGameBtn.addEventListener("click",initialize)
