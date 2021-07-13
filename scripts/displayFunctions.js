
// Display numbers of available flags.
function displayNoFlags() {
	if (noFlags > 9) {
		document.getElementById("flags").innerHTML = "0" + noFlags;
	} else {
		document.getElementById("flags").innerHTML = "00" + noFlags;
	}
	return false;
}

// Display time game.
function displayTime() {
	let displaySeconds;
	if (seconds < 10) {
		displaySeconds = "00" + seconds;
	} else if (seconds < 100) {
		displaySeconds = "0" + seconds;
	} else {
		displaySeconds = seconds;
	}
	document.getElementById("time").innerHTML = displaySeconds;
	return false;
}
// Display image of cell.
function displayCell(row, column) {
	let idCell = row + "." + column;
	if (board[row][column] === 0) {
		document.getElementById(idCell).style.backgroundImage = "url('images/empty-cell.png')";
	} else if (board[row][column] === 1) {
		document.getElementById(idCell).style.backgroundImage = "url('images/1.png')";
	} else if (board[row][column] === 2) {
		document.getElementById(idCell).style.backgroundImage = "url('images/2.png')";
	} else if (board[row][column] === 3) {
		document.getElementById(idCell).style.backgroundImage = "url('images/3.png')";
	} else if (board[row][column] === 4) {
		document.getElementById(idCell).style.backgroundImage = "url('images/4.png')";
	} else if (board[row][column] === 5) {
		document.getElementById(idCell).style.backgroundImage = "url('images/5.png')"; 
	} else if (board[row][column] === 6) {
		document.getElementById(idCell).style.backgroundImage = "url('images/6.png')";
	} else if (board[row][column] === 7) {
		document.getElementById(idCell).style.backgroundImage = "url('images/7.png')";
	} else if (board[row][column] === 8) {
		document.getElementById(idCell).style.backgroundImage = "url('images/8.png')";
	}
	return false;
}