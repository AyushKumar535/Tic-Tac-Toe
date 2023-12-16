let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let wincoin = document.querySelector(".win-coint");
let win = document.querySelector("#win");

let turnO = true;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.classList.add('O')
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disablesBoxes = () => {
    for(let box of boxes) {
       box.disabled = true;
    }
};

const enablesBoxes = () => {
    for(let box of boxes) {
       box.disabled = false;
       box.innerHTML = "";
    }
};
const showwinner = (winner) => {
    win.innerText = `Congratulations,Winner is ${winner}`;
    wincoin.classList.remove("hide");
    disablesBoxes();
};
const checkwinner = () => {
    for( let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showwinner(pos1Val);
            }
        }
    }
};

const ResetGame = () => {
     turnO = true;
     enablesBoxes();
     wincoin.classList.add("hide");
    //  console.log("reset");
}
resetbtn.addEventListener("click",ResetGame)