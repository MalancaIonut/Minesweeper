// Set difficulty game.
function setDifficulty(line, column, bombs) {
	noLines = line;
	noColumns = column;
	noBombs = bombs;
	noFlags = bombs;
	createBoard();
	document.getElementById("display").style.visibility = 'visible';
	document.getElementById("difficulty").style.visibility = 'hidden';
	return false;
}

// Set the bombs on game board randomly.
function setBombs(line, col) {
	while(noBombs > 0) {
		let row = Math.floor(Math.random() * noLines) + 1;
		let column = Math.floor(Math.random() * noColumns) + 1;
		if (board[row][column] != -1 && (row != line || column != col)) {
			board[row][column] = -1;
			--noBombs;
		}
	}
	return false;
}

// Set numbers on cell, if bombs it's around.
function setNumbers() {
	for (let row = 1; row <= noLines; ++row) {
		for (let column = 1; column <= noColumns; ++column) {
			if (board[row][column] === 0) {
				for (let i = row - 1; i <= row + 1; ++i) {
					for (let j = column - 1; j <= column + 1; ++j) {
						if (board[i][j] === -1) {
							++board[row][column];
						}
					}
				}
			}
		}
	}
	return false;
}

// Set flag on/off for a cell.
function setFlag(row, column) {
	let idCell = row + "." + column;
	if (checkedBoard[row][column] === 1 && noFlags > 0) {
		--noFlags;
		checkedBoard[row][column] = 2;
		document.getElementById(idCell).style.backgroundImage = "url('images/flag.png')";
	} else if (checkedBoard[row][column] === 2) {
		++noFlags;
		checkedBoard[row][column] = 1;
		document.getElementById(idCell).style.backgroundImage = "url('images/cell.png')";
	}
	displayNoFlags();
	return false;
}

// Set game time.
function setTime() {
	if (seconds < 999) {
		++seconds;
	} else {
		$('#.bttn').attr('disabled', 'disabled');
		document.getElementById("message").innerHTML = "Sorry! You`re out of time. Game over !";
		document.getElementById("reset").style.visibility = 'visible';
	}
	displayTime();
	return false;
}