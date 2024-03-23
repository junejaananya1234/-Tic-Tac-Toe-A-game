let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".re-btn");
let message = document.querySelector("#msg");
let newButton = document.querySelector(".new-btn");
let wholediv = document.querySelector(".msg-container")
let turnO= true; // playerx, playery
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame = () => {
  turnO = true;
  enabledBoxes();
  wholediv.classList.remove("hide");
}

boxes.forEach((box)=>{
     box.addEventListener("click", () => {
       if(turnO === true){ // player1 ki turn 
        box.innerText = "0";
        box.style.backgroundColor = "#ff8800";
        turnO = false;
       }else{  // player 2 li turn 
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
       checkWinner();
     })
})

const disabledBoxes = () =>{
    for(let box of boxes){
      box.disabled = true;
    }
}

const enabledBoxes = () => {
  for(let box of boxes){
    box.disabledBoxes = false;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
   message.innerText = `Congratulations!! Winner is${winner}`;
   wholediv.classList.remove("hide");
   disabledBoxes();
   
}
 
const checkWinner = () => {
  for( let patterns of winPatterns){
    // console.log(patterns);
    // console.log(patterns[0], patterns[1], patterns[2]);
    // console.log(boxes[patterns[0]].innerText, // position1 value
    //    boxes[patterns[1]].innerText,       // position2 value 
    //     boxes[patterns[2]].innerText);      //position3 value

    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        
        showWinner(pos1Val);
      }
    }
        
  }
}

newButton.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);
