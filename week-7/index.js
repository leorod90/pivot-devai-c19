// 1) Age check (fixed message)
let age = 17;

if (age >= 18) {
  alert("You are an adult");
} else {
  alert("You are under 18");
}

// 2) Prompt password check (fixed missing brace)
let testPassword = prompt("Enter your password.");
const databasePassword = "abc123";

if (testPassword === databasePassword) {
  alert("Welcome to your account");
} else {
  alert("Error: wrong information");
}

// 3) DOM login example (requires HTML elements with these ids)
const USER_PASSWORD = "abc123";
const passwordInput = document.getElementById("password-input");
const errorMessage = document.getElementById("error");

function loginHandler() {
  // Guard in case IDs don't exist (prevents crash)
  if (!passwordInput || !errorMessage) {
    console.log("Missing #password-input or #error in HTML");
    return;
  }

  console.log(passwordInput.value);

  if (passwordInput.value === USER_PASSWORD) {
    errorMessage.textContent = "Welcome";
    errorMessage.style.color = "green";
  } else {
    errorMessage.textContent = "Error: wrong information";
    errorMessage.style.color = "red";
  }
}

// 4) Fruits array work
let fruits = ["apple", "pear", "grapes", "kiwi"];
fruits[1] = "orange";
fruits.push("banana");
fruits[2] = "mango";

console.log("Length:", fruits.length);
console.log(fruits[0], fruits[1], fruits[2], fruits[3]);

for (let i = 0; i < fruits.length; i += 2) {
  console.log("Every other fruit:", fruits[i]);
}

// 5) Fruit list render + add fruit (single render path)
const fruitInput = document.getElementById("fruitInput");
const addBtn = document.getElementById("addBtn");
const fruitListEl = document.getElementById("fruitList");

if (addBtn) addBtn.addEventListener("click", addFruit);

// Render once on page load (if list exists)
renderList();

function addFruit() {
  if (!fruitInput) return;

  const fruit = fruitInput.value.trim();
  if (fruit === "") return;

  fruits.push(fruit);
  renderList();
  fruitInput.value = "";
}

function renderList() {
  if (!fruitListEl) return;

  fruitListEl.innerHTML = "";
  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    fruitListEl.appendChild(li);
  }
}

// 6) Hello button function
function sayHello() {
  alert("Hello");
}