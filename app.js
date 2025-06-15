console.log("Hi Friend, Welcome");

const numberDisplay = document.getElementById("numberDisplay");
const img = document.getElementById("cookie");

const rate = document.getElementById("rate");
const persecond = document.getElementById("persecond");

let counter = Number(localStorage.getItem("counter")) || 0;

let workForce = 0;
let superCounter = 1;
let timeStart = false;
let index = 0;
let upgradeCounter = 0;

function cookiesFromClick() {
  if (upgradeCounter == 0) {
    counter += 1;
  } else {
    counter += upgradeCounter;
  }
  localStorage.setItem("counter", counter);
  numberDisplay.innerText = counter;
  console.log("a cookies per click");
}

img.addEventListener("click", cookiesFromClick);

function baking() {
  counter = counter + workForce * superCounter;
  localStorage.setItem("counter", counter);
  numberDisplay.innerText = counter;
  console.log("baking needed for a cookie");
}

function cookiesFromTime() {
  workForce = workForce + 1;
  if (timeStart == false) {
    timeStart = true;
    setInterval(() => {
      baking();
    }, 1000);
  }

  rate.innerText = workForce;
  console.log("how time produces a cookie");
}

persecond.addEventListener("click", cookiesFromTime);

//the upgrades are taken from API : https://cookie-upgrade-api.vercel.app/api/upgrades

//fetching the data from the API link
async function fetchData() {
  const response = await fetch(
    `https://cookie-upgrade-api.vercel.app/api/upgrades`
  );
  const rawData = await response.json();
  console.log(rawData);

  const Upgrades = rawData;
  return Upgrades;
}

fetchData();

//linking up sections of my html file with new elements

const leftSection = document.getElementById("leftSection");
const popupmessages = document.getElementById("popupmessages");

//extracting information about the different upgrades and displaying in on the document
//via createElement() and appendChild()

async function theDeals() {
  const upgrades = await fetchData();
  console.log(upgrades);

  upgrades.forEach((upgrade) => {
    const div = document.createElement("div");
    const nameUpgrade = document.createElement("button");
    const costUpgrade = document.createElement("button");
    const increaseUpgrade = document.createElement("button");

    div.className = "gridwrapper";
    nameUpgrade.innerText = upgrade.name;
    costUpgrade.innerText = upgrade.cost;
    increaseUpgrade.innerText = upgrade.increase;

    nameUpgrade.className = "name";
    costUpgrade.className = "cost";
    increaseUpgrade.className = "increase";

    console.log(nameUpgrade, costUpgrade, increaseUpgrade);
    div.append(nameUpgrade, costUpgrade, increaseUpgrade);
    leftSection.appendChild(div);

    costUpgrade.addEventListener("click", () => {
      popupmessages.innerHTML = "";
      const threshold = upgrade.cost;
      const warning = document.createElement("p");
      const upgradeIsSuccessful = document.createElement("p");

      warning.innerText = `"You unfortunately can not upgrade.You need to wait.You need"`;
      warning.className = "warning";
      upgradeIsSuccessful.innerText = `"The upgrade was successful"`;
      upgradeIsSuccessful.className = "upgradeIsSuccessful";

      if (counter < threshold) {
        popupmessages.appendChild(warning);
      } else {
        counter = counter - threshold;
        upgradeCounter += upgrade.increase;
        localStorage.setItem("counter", counter);
        popupmessages.appendChild(upgradeIsSuccessful);
      }
    });
  });
}

theDeals();

const messages = [
  "One cookie a day keeps the doctor away _by Enhanced Oven",
  "Keep clicking those cookies _by Cookie Farm ",
  "You are a cookie master _by Robot Baker",
  "Cookies are life _by Cookie Factory",
  "Click, click, click! _by Autoclicker",
  "Cookie power! _by Magic Flour",
  "Cookies, Past, Present, and Future _by Time Machine",
  "Cookies or not cookies? _by Quantum Oven",
  "jfjfjnefjnefjnefejnfje _by Alien Technology",
];

// Display a message every 3 minutes//
setInterval(() => {
  for (let i = 0; i < messages.length - 1; i++) {
    const div = document.getElementById("repeatmessages");
    const message = document.createElement("p");
    div.innerHTML = "";
    message.innerText = messages[i];
    div.appendChild(message);
    console.log(message);
  }
}, 180000);
