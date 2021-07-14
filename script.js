// Variables, Inputs and Outputs

// Inputs
var billAmountInput = document.getElementById("billAmount");
var numberOfPeopleInput = document.getElementById("numberOfPeople");
var custom = document.querySelector(".custom");

// Tip buttons
// Tip 5
var tip5 = document.getElementById("tip5");
tip5.onclick = function () {
  removeActiveColor();
  tip = 5;
  document.getElementById("tip5").classList.add("selected");
  custom.value = "";
};
// Tip 10
var tip10 = document.getElementById("tip10");
tip10.onclick = function () {
  removeActiveColor();
  tip = 10;
  document.getElementById("tip10").classList.add("selected");
  custom.value = "";
};
// Tip 15
var tip15 = document.getElementById("tip15");
tip15.onclick = function () {
  removeActiveColor();
  tip = 15;
  document.getElementById("tip15").classList.add("selected");
  custom.value = "";
};
// Tip 25
var tip25 = document.getElementById("tip25");
tip25.onclick = function () {
  removeActiveColor();
  tip = 25;
  document.getElementById("tip25").classList.add("selected");
  custom.value = "";
};
// Tip 50
var tip50 = document.getElementById("tip50");
tip50.onclick = function () {
  removeActiveColor();
  tip = 50;
  document.getElementById("tip50").classList.add("selected");
  custom.value = "";
};
// Button Active color
function removeActiveColor() {
  document.querySelectorAll(".tipButton").forEach((el) => {
    el.classList.remove("selected");
  });
}
// Outputs
var tipAmountDisplay = document.getElementById("tipAmountDisplay");
var totalDisplay = document.getElementById("totalDisplay");

// Error Messages
var billErrorMessage = document.querySelector(".billErrorMessage");
var tipErrorMessage = document.querySelector(".tipErrorMessage");
var numberOfPeopleErrorMessage = document.querySelector(
  ".numberOfPeopleErrorMessage"
);

//Variables
var billAmount = billAmountInput.value;
var numberOfPeople = numberOfPeopleInput.value;
var tip = 0;
var totalPerPerson = 0;

// Calculate button
var calculate = document.getElementById("calculatesBtn");
calculate.onclick = split;

// Reset Button
var reset = document.getElementById("restBtn");
reset.onclick = resetFunction;

// Check custom Tip
function checkCustomTip() {
  if (custom.value > 0 && custom.value <= 1000) {
    tip = custom.value;
    tipErrorMessage.innerHTML = "";
    return true;
  } else if (custom.value < 0) {
    console.log("error");
    tipErrorMessage.innerHTML = "Tip Can't be negative";
  } else if (custom.value > 1000) {
    console.log("error");
    tipErrorMessage.innerHTML = "Tip Can't exceed 1000";
  } else {
    return true;
  }
}

// Check number of people
function peopleCheck() {
  if (numberOfPeopleInput.value <= 0 || numberOfPeopleInput == undefined) {
    numberOfPeopleErrorMessage.innerHTML = "Can't be zero or negative";
  } else {
    return true;
  }
}

// Check Bill Amount
function checkBill() {
  if (billAmountInput.value < 0) {
    billErrorMessage.innerHTML = "The Bill Can't be negative";
  } else if (billAmountInput.value > 1000000) {
    billErrorMessage.innerHTML = "The bill Can't Exceed $1000000";
  } else {
    return true;
  }
}

// Clear Error Messages
function clearError() {
  billErrorMessage.innerHTML = "";
  tipErrorMessage.innerHTML = "";
  numberOfPeopleErrorMessage.innerHTML = "";
}

// Clear Input Fields
function clearInput() {
  tipAmountDisplay.innerHTML = "$0.00";
  totalDisplay.innerHTML = "$0.00";
  billAmountInput.value = "";
  numberOfPeopleInput.value = "";
  custom.value = "";
}

// Main function
function split() {
  checkCustomTip();
  peopleCheck();
  checkBill();
  if (checkCustomTip() && peopleCheck() && checkBill()) {
    // Tip Amount
    tipAmountDisplay.innerHTML = `$${(
      (billAmountInput.value * (tip / 100)) /
      numberOfPeopleInput.value
    ).toFixed(2)}`;
    // Total Amount
    totalPerPerson =
      (billAmountInput.value * (1 + tip / 100)) / numberOfPeopleInput.value;
    totalDisplay.innerHTML = `$${totalPerPerson.toFixed(2)}`;
  }
}

// Reset Function
function resetFunction() {
  clearError();
  clearInput();
  removeActiveColor();
}

// Set interval later
// setInterval(count, 1000);

// For each
// document.querySelectorAll(".tipButton").forEach((el) => {
//   el.style.backgroundColor = "hsl(183, 100%, 15%)";
// });
