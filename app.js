let boxes=document .querySelectorAll(".box");
let resetButton=document.getElementById("reset");
let turnO=true;
const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0,4,8],
    [2,4,6]

];
const checkWin=()=>{
    for(let pattern of winPatterns){
     let pos1Val=boxes[pattern[0]].innerText;
     let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    if(pos1Val && pos1Val===pos2Val && pos1Val===pos3Val){
        alert(`${pos1Val} is the winner`);
        boxes.forEach((box)=>{
            box.disabled=true;
        })
        return;
     }
    }
}
const resetGame=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    turnO=true;
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWin();
        
    })
    resetButton.addEventListener("click",()=>{
        resetGame();
    })
})