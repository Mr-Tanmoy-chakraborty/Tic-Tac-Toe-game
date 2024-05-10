let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".newBtn");
let winningBttn = document.querySelector(".winningBtn");
let newMsg = document.querySelector(".newMsg")
let turn0 = true;

const winningPattern =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
    ];
const resetgame = () => {
    turn0 = true;
    enableboxes();
    boxes.forEach(box => {
        box.innerText = ""; // Reset text content of each box
    });
    newMsg.innerText = ""; // Reset message
    winningBttn.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        // console.log("button was clicked!");
        if (turn0 === true) {
            box.innerText = "o";
            turn0 = false;
        }
        else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = "true";
        checkwinner();
    });
});

const disabledboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;


    }
}
const showwinner = (winner) => {
    newMsg.innerText = `congratulation the winner is ${winner}`;
    winningBttn.classList.remove("hide");
    disabledboxes();
}
const checkwinner = () => {
    for (let pattern of winningPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos2val);
                showwinner(pos1val);

            }
        }
    }
}

resetBtn.addEventListener("click", resetgame);
