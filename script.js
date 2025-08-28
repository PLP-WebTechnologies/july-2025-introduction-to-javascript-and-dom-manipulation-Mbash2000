// ======================
// Part 1: Basics
// ======================

// Variables, data types, operators, conditionals
function checkAge() {
    let age = document.getElementById("age").value; // capture input
    let result = "";

    if (age >= 18) {
        result = "✅ You are eligible to vote!";
    } else if (age > 0) {
        result = "❌ Sorry, you are too young to vote.";
    } else {
        result = "⚠️ Please enter a valid age.";
    }

    document.getElementById("ageResult").textContent = result;
}

// ======================
// Part 2: Functions
// ======================

// Function to calculate total price (reusable block of logic)
function calculateTotal(price, quantity) {
    return price * quantity;
}

function showTotal() {
    let total = calculateTotal(150, 3); // example: price=150, qty=3
    document.getElementById("totalResult").textContent =
        "Total = " + total;
}

// Another function for string formatting
function formatName(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " +
        lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
console.log("Formatted Name:", formatName("bashir", "muhammad"));

// ======================
// Part 3: Loops
// ======================

function countDown() {
    let list = document.getElementById("countdownList");
    list.innerHTML = ""; // clear previous content

    // For loop example
    for (let i = 5; i >= 1; i--) {
        let li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li);
    }

    // While loop example
    let fruits = ["Apple", "Banana", "Orange"];
    let index = 0;
    while (index < fruits.length) {
        console.log("Fruit:", fruits[index]);
        index++;
    }
}

// ======================
// Part 4: DOM Manipulation
// ======================

// Toggle theme class
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Add new messages dynamically
function addMessage() {
    let messagesDiv = document.getElementById("messages");
    let newMsg = document.createElement("p");
    newMsg.textContent = "New message at " + new Date().toLocaleTimeString();
    messagesDiv.appendChild(newMsg);
}

// Change text dynamically on page load
document.getElementById("greeting").textContent = "Welcome, JavaScript Learner!";
