console.log("Hi Friend, Welcome")

const numberDisplay = document.getElementById("display")

const button = document.getElementById("click")

let counter = 0

  numberDisplay.innerText = counter 



button.addEventListener('click', () => {

   // let counter = localStorage.getItem('counter') || 0
   // localStorage.setItem('counter', counter)
    
    counter = counter + 2
    numberDisplay.innerText = counter
    console.log("total cookies from a click")
    
   
})



//cookies = cookiesFromClick + CookiesFromTime


//timer increasing number of cookies by 1
//const timePower = document.createElement("h1")
//timePower.innerHTML = setInterval(()=> { console.log( counter +=); }, 500) 
//medium.appendChild(timePower)

  

//const cookiesFromClick = document.createElement("h3")
 // cookiesFromClick.innerText = counter
//medium.append(cookiesFromClick)

//the upgrades are taken from API : https://cookie-upgrade-api.vercel.app/api/upgrades

async function fetchData(){
  const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
  const rawData = await response.json()
  console.log(rawData)
 
  const Upgrades = rawData
  return Upgrades
 
}

fetchData()

const low = document.getElementById("low")
const easy = document.getElementById("easy")
const moderate = document.getElementById("moderate")
const medium = document.getElementById("medium")
const difficult = document.getElementById("difficult")



async function oneUpgrade(){
   const upgrades = await fetchData()
   const lowUpgrades = upgrades.slice(0,3)
   
   console.log(lowUpgrades)
   console.log(upgrades)




   lowUpgrades.forEach((lowUpgrade)=> {
     const div = document.createElement("div")
     const nameUpgrade = document.createElement("button")
     const costUpgrade = document.createElement("button")
     const increaseUpgrade = document.createElement("button")
     
     nameUpgrade.innerText = lowUpgrade.name
     costUpgrade.innerText = lowUpgrade.cost
     increaseUpgrade.innerText = lowUpgrade.increase
     
     nameUpgrade.className = 'name'
     costUpgrade.className = 'cost'
     increaseUpgrade.className = 'increase'




     console.log(nameUpgrade, costUpgrade, increaseUpgrade)
     div.append(nameUpgrade)
    easy.appendChild(div)
   }
   )

   const medUpgrades = upgrades.slice(3, 7)
   console.log(medUpgrades)
   
  medUpgrades.forEach((medUpgrade)=> {
     const div = document.createElement("div")
     const nameUpgrade = document.createElement("button")
     const costUpgrade = document.createElement("button")
     const increaseUpgrade = document.createElement("button")
     
     nameUpgrade.innerText = medUpgrade.name
     costUpgrade.innerText = medUpgrade.cost
     increaseUpgrade.innerText = medUpgrade.increase
     
     nameUpgrade.className = 'name'
     costUpgrade.className = 'cost'
     increaseUpgrade.className = 'increase'

     console.log(nameUpgrade, costUpgrade, increaseUpgrade)
     div.append(nameUpgrade)
    moderate.appendChild(div)
  }
  )


  const highUpgrades = upgrades.slice(7,11)
  console.log(highUpgrades)

  highUpgrades.forEach((highUpgrade)=> {
     const div = document.createElement("div")
     const nameUpgrade = document.createElement("button")
     const costUpgrade = document.createElement("buttn")
     const increaseUpgrade = document.createElement("button")
     
     nameUpgrade.innerText = highUpgrade.name
     costUpgrade.innerText = highUpgrade.cost
     increaseUpgrade.innerText = highUpgrade.increase
     
     nameUpgrade.className = 'name'
     costUpgrade.className = 'cost'
     increaseUpgrade.className = 'increase'

     console.log(nameUpgrade, costUpgrade, increaseUpgrade)
     div.append(nameUpgrade)
    right.appendChild(div)
  }
  )
}


oneUpgrade()


