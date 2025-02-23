const score = {
    computerWins: 0, 
    playerWins: 0, 
    draw: 0,
};

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = "Rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = "Paper";
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = "Scissors";
    }

    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "Rock") {
        if (computerMove === "Rock") {
            result = "Draw"; 
        } else if (computerMove === "Paper") {
            result = "Computer Wins";
        } else if (computerMove === "Scissors") {
            result = "Player Wins";
        }
    } else if (playerMove === "Paper") {
        if (computerMove === "Rock") {
            result = "Player Wins";
        } else if (computerMove === "Paper") {
            result = "Draw";
        } else if (computerMove === "Scissors") {
            result = "Computer Wins";
        }
    } else if (playerMove === "Scissors") {
        if (computerMove === "Rock") {
            result = "Computer Wins";
        } else if (computerMove === "Paper") {
            result = "Player Wins";
        } else if (computerMove === "Scissors") {
            result = "Draw";
        }
    }

    if (result === "Player Wins") {
        score.playerWins += 1;
    } else if (result === "Computer Wins") {
        score.computerWins += 1;
    } else if (result === "Draw") {
        score.draw += 1;
    }

    updateScoreAnnouncement(result);
    playerMoveAvatarUpdate(playerMove);
    computerMoveAvatarUpdate(computerMove);
}

function updateScoreAnnouncement(result) {
    document.querySelector(".scores-update").innerHTML = `Computer ${score.computerWins} - ${score.playerWins} Player`;
    document.querySelector(".winner-announcement-update").innerHTML = result;
}

function playerMoveAvatarUpdate(playerMove) {
    if (playerMove === "Rock") {
        document.querySelector(".player-choice-announcement").innerHTML = "✊";
    } else if (playerMove === "Paper") {
        document.querySelector(".player-choice-announcement").innerHTML = "✋";
    } else if (playerMove === "Scissors") {
        document.querySelector(".player-choice-announcement").innerHTML = "✌️";
    }
}

function computerMoveAvatarUpdate(computerMove) {
    if (computerMove === "Rock") {
        document.querySelector(".computer-choice-announcement").innerHTML = "✊";
    } else if (computerMove === "Paper") {
        document.querySelector(".computer-choice-announcement").innerHTML = "✋";
    } else if (computerMove === "Scissors") {
        document.querySelector(".computer-choice-announcement").innerHTML = "✌️";
    }
}
