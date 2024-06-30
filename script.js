let gameBoard = document.querySelector('.game-board');
let squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

gameBoard.addEventListener('click', handleSquareClick);

function handleSquareClick(event) {
	let square = event.target;
	if (square.classList.contains('square')) {
		let index = square.dataset.index;
		if (!square.classList.contains('x') && !square.classList.contains('o')) {
			square.classList.add(currentPlayer);
			checkWinner();
			switchPlayer();
		}
	}
}

function checkWinner() {
	let winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let combination of winningCombinations) {
		if (squares[combination[0]].classList.contains(currentPlayer) &&
			squares[combination[1]].classList.contains(currentPlayer) &&
			squares[combination[2]].classList.contains(currentPlayer)) {
			alert(`Player ${currentPlayer} wins!`);
			return;
		}
	}
}

function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
