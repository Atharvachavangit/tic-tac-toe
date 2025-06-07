let boxes = document.querySelectorAll(".box"); // Select all boxes
let reset = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let winMsg = document.querySelector("#win-msg");

let turno = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turno = true;
  enablebox();
  msg.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    box.disabled = true;
    turno = !turno;
    console.log("Box has been clicked");

    checkWinner();
  });
});

const disablebox = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enablebox = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  winMsg.innerText = `Winner is ${winner}`;
  msg.classList.remove("hide");
  disablebox();
};

const checkWinner = () => {
  for (patten of winPattern) {
    let p1 = boxes[patten[0]].innerText;
    let p2 = boxes[patten[1]].innerText;
    let p3 = boxes[patten[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        console.log("winner");

        showWinner(p1);
      }
    }
  }
};

reset.addEventListener("click", resetGame);
