console.log("Hi Friend, Welcome")

const numberDisplay = document.getElementById("display")
const button = document.getElementById("click")

const rate = document.getElementById("rate")
const persecond = document.getElementById("persecond")

let counter = 0
let workForce = 0
let superCounter = 1
let timeStart = false
let index = 0


  //let counter = localStorage.getItem('counter') || 0
   //localStorage.setItem('counter', counter)

function cookiesFromClick(){

    counter = counter + 1
    numberDisplay.innerText = counter
    console.log("a cookies per click")
}

button.addEventListener('click', cookiesFromClick)

function baking(){
    counter = counter + (workForce*superCounter)
    numberDisplay.innerText = counter
    console.log("baking needed for a cookie")
}

function cookiesFromTime(){
  
    workForce = workForce + 1
    if(timeStart == false) {
      timeStart = true
     setInterval(()=> { baking() }, 1000)}
   
    rate.innerText = workForce
    console.log("how time produces a cookie")
     
}

persecond.addEventListener('click', cookiesFromTime)


//the upgrades are taken from API : https://cookie-upgrade-api.vercel.app/api/upgrades

//fetching the data from the API link
async function fetchData(){
  const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
  const rawData = await response.json()
  console.log(rawData)
 
  const Upgrades = rawData
  return Upgrades
 
}

fetchData()

//linking up sections of my html file with new elements

const low = document.getElementById("low")
const easy = document.getElementById("easy")
const moderate = document.getElementById("moderate")
const medium = document.getElementById("medium")
const difficult = document.getElementById("difficult")


//extracting information about the different upgrades and displaying in on the document
//via createElement() and appendChild()

async function theDeals(){
   const upgrades = await fetchData()
   console.log(upgrades)

 upgrades.forEach((upgrade)=> {
     let div = document.createElement("div")
     let nameUpgrade = document.createElement("button")
     let costUpgrade = document.createElement("button")
     let increaseUpgrade = document.createElement("button")
     
     nameUpgrade.innerText = upgrade.name
     costUpgrade.innerText = upgrade.cost
     increaseUpgrade.innerText = upgrade.increase

     
     nameUpgrade.className = 'name'
     costUpgrade.className = 'cost'
     increaseUpgrade.className = 'increase'

     upgradingCookie(upgrade)
   
    costUpgrade.addEventListener('click', ()=>{
      index +=1
      if (upgradeIndex = 0) (counter = costUpgrade[index])
    })






  console.log(nameUpgrade, costUpgrade, increaseUpgrade)
  div.append(nameUpgrade, costUpgrade, costt)
  easy.appendChild(div)
   







   
} )

}

theDeals()
 





// create a pop-up message which explains cost and new abilities


 
    // const boxText = document.getElementById("boxText")
    // const popUpText = document.createElement("p")

    // popUpText.innerText = "It will cost you 500$. A click is now worth 10 cookies"
    // popUpText.className = "popUp"
    // popUpText.addEventListener('click', ()=>{
    //   console.log(event)
    // })

    // boxText.appendChild(popUpText)

 

