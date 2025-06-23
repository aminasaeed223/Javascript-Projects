const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}"
const dropdown = document.querySelectorAll('.dropdown select')

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
select.addEventListener("chnage", (evt) =>{
    updateFlag(evt.target);
})
}
const updateFlag = (element) =>{
let currCode = element.value;
let countrycode = countryList[currCode]
let newsrc = "https://flagsapi.com/${countrycode}/flat/64.png"
}


