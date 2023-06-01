const topL = document.querySelector('.tl');
const topM = document.querySelector('.tm');
const topR = document.querySelector('.tr');
const midL = document.querySelector('.ml');
const midM = document.querySelector('.mm');
const midR = document.querySelector('.mr');
const botL = document.querySelector('.bl');
const botM = document.querySelector('.bm');
const botR = document.querySelector('.br');


const playerBox = document.querySelector('.player');
const resetBtn = document.querySelector('.reset')
const boardDiv = document.querySelector('.board');
const gridDiv = document.querySelector('#grid-container');


let playerTurn = true;
let mark = "X";


//store gameboard inside of an array, inside of an gameboard object. Module?

const gameboard = (() => {

    const board = ["", "", "", "", "", "", "", "", ""];


    const display = () => {
        topL.textContent = board[0];
        topM.textContent = board[1];
        topR.textContent = board[2];
        midL.textContent = board[3];
        midM.textContent = board[4];
        midR.textContent = board[5];
        botL.textContent = board[6];
        botM.textContent = board[7];
        botR.textContent = board[8];
    }
    return {board, display};
})();

//players inside of objects


//object to control game

const game = (() => {

    function playerColor() {
        if (playerTurn === false) {
            playerBox.classList.remove("playerTwo");
            playerBox.classList.add("playerOne");
            mark = "X";
            playerTurn = true;
        }

        else if(playerTurn === true) {
            playerBox.classList.remove("playerOne");
            playerBox.classList.add("playerTwo");
            mark = "O";
            playerTurn = false;
        }

    }

    const click = () => {


        //reset button to iterate through gameboard
        resetBtn.addEventListener("click", () => {
            for (i = 0; i<9; i++) {
                gameboard.board[i] = "";
            }

            playerBox.classList.remove("playerOne");
            playerBox.classList.remove("playerTwo");
            gameboard.display();
        })




        //events for click on each board square, then running function to show which player's turns
        topL.addEventListener("click", () => {
            if (gameboard.board[0] === "") {
                gameboard.board[0] = mark;
                gameboard.display();
                playerColor();
                winCheck();
            }

            else {
                gameboard.display();
            }
        })

        topM.addEventListener("click", () => {
            if (gameboard.board[1] === "") {
                gameboard.board[1] = mark;
                gameboard.display();
                playerColor();
                winCheck();
            }

            else {
                gameboard.display();
            }
        })

        topR.addEventListener("click", () => {
            if (gameboard.board[2] === "") {
                gameboard.board[2] = mark;
                gameboard.display();
                playerColor();
                winCheck();
            }

            else {
                gameboard.display();
            }
        })

    midL.addEventListener("click", () => {
        if (gameboard.board[3] === "") {
            gameboard.board[3] = mark;
            gameboard.display();
            playerColor();
            winCheck();
        }

        else {
            gameboard.display();
        }
    })

    midM.addEventListener("click", () => {
        if (gameboard.board[4] === "") {
            gameboard.board[4] = mark;
            gameboard.display();
            playerColor();
            winCheck();
        }

        else {
            gameboard.display();
        }
})

    midR.addEventListener("click", () => {
        if (gameboard.board[5] === "") {
            gameboard.board[5] = mark;
            gameboard.display();
            playerColor();
            winCheck();
        }

        else {
            gameboard.display();
        }
    })

    botL.addEventListener("click", () => {
        if (gameboard.board[6] === "") {
            gameboard.board[6] = mark;
            gameboard.display();
            playerColor();
            winCheck();
        }

        else {
            gameboard.display();
        }
})

    botM.addEventListener("click", () => {
        if (gameboard.board[7] === "") {
            gameboard.board[7] = mark;
            gameboard.display();
            playerColor();
            winCheck();
        }

        else {
            gameboard.display();
        }
    })

    botR.addEventListener("click", () => {
        if (gameboard.board[8] === "") {
            gameboard.board[8] = mark;
            gameboard.display();
            playerColor();
            winCheck();
        }

        else {
            gameboard.display();
        }
})

}

    function winCheck() {
        if (topL.textContent === topM.textContent && topM.textContent === topR.textContent) {
            gridDiv.classList.remove("start");
            gridDiv.classList.add("win");
        }

        else if (midL.textContent === midM.textContent && midM.textContent === midR.textContent) {
            gridDiv.classList.remove("start");
            gridDiv.classList.add("win");
        }
    }
    return{click};
})();




game.click();

//tip - one of something is a module, multiples (players) is a factory



