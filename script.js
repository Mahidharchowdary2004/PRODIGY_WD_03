let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("square")[index].innerText = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} wins!`);
            resetGame();
            return;
        }
    }

    if (!board.includes("")) {
        alert("It's a draw!");
        resetGame();
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    const squares = document.getElementsByClassName("square");
    for (let square of squares) {
        square.innerText = "";
    }
}
