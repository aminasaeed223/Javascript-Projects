let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('#reset')
let message = document.querySelector(".msg")
let win = document.querySelector("#win")

let turn0 = true;
const winPatterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X" 
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
    
})
const resetbtn = () =>{
turn0 = true;
enablebtn();
message.classList.add("hide")
}
const disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
reset.addEventListener('click',resetbtn);

const showWinner = (winner) =>{
    win.innerText = `Congratulations, winner is ${winner}`
    message.classList.remove("hide")
    disablebtn()
}
const checkWinner = () =>{
    for (let pattern of winPatterns){
       
         let pos1value =   boxes[pattern[0]].innerText
         let pos2value =   boxes[pattern[1]].innerText
         let pos3value =   boxes[pattern[2]].innerText
         if ( pos1value != "" && pos2value != "" && pos3value != "" )
         {
            if (pos1value === pos2value && pos2value === pos3value){
                console.log("winner", pos1value)
                showWinner(pos1value)
            }
         }

        
    }
}