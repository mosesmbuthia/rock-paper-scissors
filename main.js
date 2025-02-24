const score = {
    computerWins: 0,
    playerWins: 0,
    draw: 0,
};

function pickComputerMove() {
    const randomNumber = Math.random();
    const roundedDown = Math.floor(randomNumber);
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

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "Draw";
        /*used the logical operators AND and OR instead of nested if*/
    } else if (
        (playerMove === "Rock" && computerMove === "Scissors") ||
        (playerMove === "Paper" && computerMove === "Rock") ||
        (playerMove === "Scissors" && computerMove === "Paper")
    ) {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }
}


function playGame(playerMove) {
    const computerMove = pickComputerMove();
    const result = determineWinner(playerMove, computerMove);


    if (result === "Player Wins") {
        score.playerWins += 1
    } else if (result === "Computer Wins") {
        score.computerWins += 1;
    } else if (result === "Draw") {
        score.draw += 1;
    }

    /*use the query selector to identify the score update class in the html document*/

    function updateScoreAnnouncement(result) {
        document.querySelector(".scores-update").innerHTML = `Computer ${score.computerWins}  ${score.playerWins} Player`;
        document.querySelector(".winner-announcement-update").innerHTML = result;
    }
    updateScoreAnnouncement(result);

    function playerMoveAvatarUpdate(playerMove) {
        if (playerMove === "Rock") {
            document.querySelector(".player-choice-announcement").innerHTML = "✊"
        } else if (playerMove === "Paper") {
            document.querySelector(".player-choice-announcement").innerHTML = "✋"
        } else if (playerMove === "Scissors") {
            document.querySelector(".player-choice-announcement").innerHTML = "✌️"
        }
    }
    playerMoveAvatarUpdate(playerMove);


    function computerMoveAvatarUpdate(computerMove) {
        if (computerMove === "Rock") {
            document.querySelector(".computer-choice-announcement").innerHTML = "✊"
        } else if (computerMove === "Paper") {
            document.querySelector(".computer-choice-announcement").innerHTML = "✋"
        } else if (computerMove === "Scissors") {
            document.querySelector(".computer-choice-announcement").innerHTML = "✌️"
        }
    }
    computerMoveAvatarUpdate(computerMove);
}