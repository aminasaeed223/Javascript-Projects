//variables
let user = 0
let computer = 0
const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
let userscorep = document.querySelector('#userscore')
let computerscorep = document.querySelector('#computerscore')

const compchoice = ()=>{
    const options = ['rock', 'paper', 'scissor']
    const random = Math.floor(Math.random()*3)
    return options[random]
}
choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
      const userschoice = choice.getAttribute('id')
        // console.log('choice is clicked')
        playGame(userschoice)
    })
});


const playGame  = (userschoice)=>{
console.log('its your turn', userschoice)
const computer_choice = compchoice()
console.log("computer's choice is ", computer_choice)
if(userschoice === computer_choice){
    drawGame()
}else{
    let userWin = true;
    if(userschoice === "rock"){
        userWin = computer_choice === "paper"?  false : true
    }else if (userschoice === "paper"){
        userWin = computer_choice=== "scissor"? false: true;
    }else{
        userWin = computer_choice === "rock" ? false : true;

    }
    showWinner(userWin)
}

}
const drawGame = () =>{
    msg.innerText = "Game is draw!"
    msg.style.backgroundColor = "yellow"
}
const showWinner = (userWin, userschoice,computer_choice) =>{
if(userWin){
    user++;
userscorep.innerText = user
    msg.innerText = "You win the game"
    msg.style.backgroundColor = "orange"
}else{
    computer++
    computerscorep.innerText = computer
 msg.innerText = "You lose the game"
 msg.style.backgroundColor = "blue"
}
}







