//variable
let btn = document.querySelector('button')
let para = document.querySelector('p')
//logic
let quotations = [
    
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Difficult roads often lead to beautiful destinations.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Push yourself, because no one else is going to do it for you.",
  "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
  "It always seems impossible until it's done. – Nelson Mandela",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Little by little, a little becomes a lot. – Tanzanian Proverb"
];


const quoteGenerate = () =>{
    let randomIndex = Math.floor(Math.random()* quotations.length);
    para.innerHTML = quotations[randomIndex]

}


//event listner
btn.addEventListener('click', quoteGenerate)