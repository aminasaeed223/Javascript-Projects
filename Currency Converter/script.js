const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdown = document.querySelectorAll('.dropdown select')
const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".message")

for ( let select of dropdown){
    
for(currCode in countryList){
let newoption = document.createElement("option");
newoption.innerText = currCode;
newoption.value = currCode
select.append(newoption)
if(select.name === "from" && currCode === "USD"){
    newoption.selected = "Selected"
}else if(select.name === "to" && currCode === "PKR"){
    newoption.selected = "Selected"
}
}
select.addEventListener("change", (evt) =>{
    updateFlag(evt.target);
})
}
const updateFlag = (element) =>{
let currCode = element.value;
let countrycode = countryList[currCode]
let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
let img = element.parentElement.querySelector("img");
img.src = newsrc

}
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault()
    
    let amount = document.querySelector('form input');
    let amountval = amount.value;
    if(amountval === "" || amountval <1){
        amountval=1;
        amount.value = 1
    }
const newurl = `${URL}/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(newurl)
    let data = await response.json();
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];


    let finalamount = amountval*rate
   msg.innerText = `${amountval} ${fromCurr.value} = ${finalamount.toFixed(2)} ${toCurr.value}`;
})


