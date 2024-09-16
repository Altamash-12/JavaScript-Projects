let p = document.querySelector("#calculated-sum");
let sumBtn = document.querySelector("button");
let number = document.querySelector("#user-number");

sumBtn.addEventListener("click", function (e) {
  let sumOfNumbers = 0;
  for (let i = 1; i <= number.value; i++) {
    sumOfNumbers += i;
  }
  p.style.display = "block";
  p.textContent = sumOfNumbers;
  console.log(sumOfNumbers);
});

// HIGHLIGHTING ALL LINKS

const highlightBtn = document.querySelector(".highlight-btn");
highlightBtn.addEventListener("click", function (e) {
  let links = document.querySelectorAll("#highlight-links a");
  for (let link of links) {
    link.classList.add("highlight");
  }
});

// DISPLAY USER DATA
const dummyObj = {
  firstName: "ayan",
  lastName: "Khan",
  age: 13,
};

const displayUserDataBtn = document.querySelector("#user-data button");
displayUserDataBtn.addEventListener("click", function (e) {
  const ul = document.querySelector("#user-data ul");
  ul.innerHTML = "";
  for (let data in dummyObj) {
    let li = document.createElement("li");
    let liText = `${data.toUpperCase()} : ${dummyObj[data]}`;
    li.textContent = liText;
    ul.append(li);
  }
});

// ROLL THE DICE
let rollDiceBtn = document.querySelector("#statistics button");
let guessedNumOfTimes = 0;

rollDiceBtn.addEventListener("click", function (e) {
  let numOfTimes = document.querySelector("#output-total-rolls");
  let dice = document.querySelector("#output-target-number");
  let userInputNum = document.querySelector("#user-target-number");
  let guessedNum = Math.ceil(Math.random() * 6);
  let enteredNum = parseInt(userInputNum.value);
  guessedNumOfTimes++;

  if (guessedNum === enteredNum) {
    rollDiceBtn.disabled = true;
    dice.textContent = enteredNum;
    numOfTimes.textContent = guessedNumOfTimes;
  }
});
