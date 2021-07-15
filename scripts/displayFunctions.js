
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
	let cell = board[row][column];
	if (cell === 0) {
		document.getElementById(idCell).style.backgroundImage = "url('images/empty-cell.png')";
	} else if (cell > 0) {
		document.getElementById(idCell).style.backgroundImage = "url('images/"+ cell +".png')";
	}
	return false;
}
