console.log("Hi Friend");

let Friends = [
  { name: "QuickFox", age: 15, height: 158 },
  { name: "CraftyBear", age: 32, height: 162 },
  {
    name: "SmoothBeaver",
    age: 17,
    height: 169,
  },
  { name: "HollowFalcon", age: 35, height: 150 },
  { name: "ShallowMountain", age: 67, height: 173 },

  { name: "RapidElk", age: 51, height: 178 },

  {
    name: "SilentHedge",
    age: 150,
    height: 182,
  },
];

const amis = document.getElementById("friends");

Friends.forEach((Friend) => {
  const div = document.createElement("div");
  const popup = document.getElementById("popup");
  const namee = document.createElement("button");
  const costage = document.createElement("button");
  const increaseheight = document.createElement("button");

  namee.innerText = Friend.name;
  costage.innerText = Friend.age;
  increaseheight.innerText = Friend.height;

  namee.className = "name";
  costage.className = "cost";
  increaseheight.className = "increase";

  console.log(namee, costage, increaseheight);
  div.append(namee, costage, increaseheight);
  amis.appendChild(div);

  namee.addEventListener("click", () => {
    const message = document.createElement("p");
    popup.innerHTML = "";
    message.innerText = Friend.name;
    console.log(message);

    popup.appendChild(message);
  });

  costage.addEventListener("click", () => {
    let driveAge = 18;
    popup.innerHTML = "";
    const approved = document.createElement("p");
    const diff = 18 - Friend.age;

    approved.innerText = "You can drive";
    if (Friend.age < driveAge) {
      setTimeout(() => {
        const warning = document.createElement("p");
        warning.innerText = "You can not drive.You need to wait.";

        popup.appendChild(warning), 3000;
      });
    } else {
      popup.appendChild(approved);
    }
  });
});

setTimeout(() => {
  const warning = document.getElementById("disappear");
  (warning.style.display = "none"), 0;
});

// background-image:url(https://www.woodchipandmagnolia.co.uk/cdn/shop/products/WM-414-03-MATCHSTICKSTRIPE-BLUSHPINK-02_1080x.jpg?v=1689072442)
