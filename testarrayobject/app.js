console.log("Hi Friend")

let Friends = [ 
    {name: "QuickFox",
     age: 15,
     height: 158
    },
    {name: "CraftyBear",
    age: 32,
    height: 162
    },
     {
  name: "SmoothBeaver",
  age: 17,
  height: 169
    },
   { name: "HollowFalcon",
  age: 35,
  height: 150
   },
    { name: "ShallowMountain",
    age: 67,
    height: 173
},

 { name: "RapidElk",
  age: 51,
  height: 178
},

{
  name: "SilentHedge",
  age: 150,
  height: 182
},
]

const amis = document.getElementById("friends")

 Friends.forEach((Friend)=> {
 let div = document.createElement("div")
 let popup = document.getElementById("popup")
     let namee = document.createElement("button")
     let costage = document.createElement("button")
     let increaseheight = document.createElement("button")
     
     namee.innerText = Friend.name
     costage.innerText = Friend.age
     increaseheight.innerText = Friend.height


     
     namee.className = 'name'
     costage.className = 'cost'
     increaseheight.className = 'increase'

        console.log(Friends.length)


  console.log(namee, costage, increaseheight)
  div.append(namee, costage, increaseheight)
  amis.appendChild(div)


 namee.addEventListener('click', ()=> {
    let message = document.createElement("p")
    
    message.innerText = Friend.name
    console.log(message)

    popup.appendChild(message)
 })

 costage.addEventListener('click', () =>{
    let driveAge = 18
    let warning = document.createElement("p")
    let approved = document.createElement("p")
    let diff = 18 - Friend.age
    
    warning.innerText = 'You can not drive.You need to wait.'
    approved.innerText = "You can drive"
    if(Friend.age < driveAge) {setTimeout(popup.appendChild(warning), 3000)}
        else {popup.appendChild(approved)}

        })

 })

