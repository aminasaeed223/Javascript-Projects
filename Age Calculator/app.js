let date = document.querySelector('input')
let btn = document.querySelector('.form button')
let message = document.querySelector('p')

function calculateAge (){
let userage = date.value.split('-')
let calage = 2025-Number(userage[0])
  message.innerHTML = `your age is ${calage} years old`

}
btn.addEventListener('click', calculateAge)