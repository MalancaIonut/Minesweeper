
var board, checkedBoard, noLines, noColumns, noBombs, noFlags, switcher = 0, timer, seconds = 0;
// Start game . First click safe.
function startGame(row, column) {
	setBombs(row, column);
	setNumbers();
}
// Create the game board
function createBoard() {
	board = Array(noLines + 2).fill(null).map(() => Array(noColumns + 2).fill(0));
	checkedBoard = Array(noLines + 2).fill(null).map(() => Array(noColumns + 2).fill(1));
	for (let row = 1; row <= noLines; ++row) {
		let divRow = document.createElement("div");
		document.getElementById("board").appendChild(divRow);
		for (let column = 1; column <= noColumns; ++column) {
			const cell = document.createElement("button");
            cell.id = row + "." + column;
            cell.className = "bttn";
            divRow.appendChild(cell);
            cell.onclick = function() {checkCell(row, column);};
            cell.oncontextmenu = function() {setFlag(row, column); return false;};
		}
	}
	document.getElementById("flags").innerHTML =  "0" + noFlags;
    document.getElementById("time").innerHTML = "000";
    return false;
}

// Check the clicked cell.
function checkCell(row, column) {
	if (switcher === 0) {
		startGame(row, column);
		timer = setInterval(setTime, 1000);
	}
	++switcher;
	if (board[row][column] === 0 && checkedBoard[row][column] === 1) {
		emptyCell(row, column);
		win();
	} else if (board[row][column] > 0 && checkedBoard[row][column] === 1) {
		displayCell(row,column);
		win();
		checkedBoard[row][column] = 0;
	} else if (board[row][column] === -1 && checkedBoard[row][column] === 1) {
		gameOver(row,column);
	}
	return false;
}

// If game it`s over.
function gameOver(row, column) {
	for (let i = 1; i <= noLines; ++i) {
		for (let j = 1; j <= noColumns; ++j) {
			let idCell = i + "." + j;
			if(i === row && j === column) {
				document.getElementById(idCell).style.backgroundImage = "url('images/bomb-end.png')";
			} else if (checkedBoard[i][j] === 2 && board[i][j] === -1) {
				document.getElementById(idCell).style.backgroundImage = "url('images/bomb-guess.png')";
			} else if (board[i][j] === -1) {
				document.getElementById(idCell).style.backgroundImage = "url('images/bomb.png')";
			} else {
				board[i][j] = -2;
			}
			checkedBoard[i][j] = 0;
		}
	}
	document.getElementById("message").innerHTML = "Game over! Try again!";
	document.getElementById("reset").style.visibility = 'visible';
	stopTime();
	return false;
}

// If game it`s won.
function win() {
	let counter = 0;
	for (let i = 1; i <= noLines; ++i) {
		for (let j = 1; j <= noColumns; ++j) {
			if (checkedBoard[i][j] === 0) {
				++counter;
			}
		}
	}
	if (counter === noLines * noColumns - noBombs) {
		document.getElementById("message").style.color = 'green';
		document.getElementById("message").innerHTML = "CONGRATULATIONS !!! You won the game!";
		document.getElementById("reset").style.visibility = 'visible';
		stopTime();
	}
	return false;
}

// If you clicked on a empty cell and anothers empty cells is around.
function emptyCell(row, column) {
    for (let i = row - 1; i <= row + 1; ++i) {
    	if (i === 0) {
    		++i;
    	} else if (i === noLines + 1) {
    		break;
    	}
        for (let j = column - 1; j <= column + 1; ++j) {
            if (j === 0) {
                ++j;
            } else if (j === noColumns + 1) {
            	break;
            }
            if (board[i][j] >= 0 && checkedBoard[i][j] === 1) {
                checkedBoard[i][j] = 0;
                displayCell(i, j);
                if (board[i][j] === 0) {
                	board[i][j] = -2;
                    emptyCell(i, j);
                }
            }
        }
    }
    return false;
}
// Stop game time.
function stopTime() {
	clearInterval(timer);
	return false;
}

// Refresh.
function refreshPage() {
	window.location.reload();
}
