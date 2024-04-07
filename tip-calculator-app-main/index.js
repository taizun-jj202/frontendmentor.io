const bill = document.getElementById("bill-inpt");

const tip_5pc = document.getElementById("five");
const tip_10pc = document.getElementById("ten");
const tip_15pc = document.getElementById("fifteen");
const tip_25pc = document.getElementById("twntyfv");
const tip_50pc = document.getElementById("fifty");

const num_people = document.getElementById("num-peeps");
const tip_p_person = document.querySelectorAll(".tipp")[0];
const tot_amt = document.querySelectorAll(".tipp")[1];
const rst_btn = document.querySelector(".rstt-btn");

let init_bill = 0; //Initial bill before tips are added
let tip_percent = 0;
let tip_amt_p_person = 0;
let no_of_people = 0;
let tot_bill = 0;

// Getting the bill :
bill.addEventListener("input", () => {
  init_bill = bill.value;
  console.log(init_bill);
  if (init_bill < 0) {
    bill.style.borderColor = `hsl(0, 100%, 50%)`; //red colour
    init_bill = 0;
  } else bill.style.borderColor = `hsl(172, 67%, 45%)`; //Strong cyan colour
  console.log(`Init bill :${init_bill}`);
});

// Calculating :
// 1. total bill
// 2. tip per person
function calcTip(init_bill, tip_percent, no_of_people) {
  // tip_amt_p_person = (init_bill * tip_percent) / no_of_people;
  tip_amt_p_person =
    (Number(init_bill) * Number(tip_percent)) / Number(no_of_people);
  tot_bill = Number(init_bill) + Number(init_bill) * Number(tip_percent); // /100 is to round off to two decimal values
  console.log(`Inside calcTip :${tip_amt_p_person}, ${tot_bill}`);
}

tip_5pc.addEventListener("click", () => {
  tip_percent = 0.05;
  console.log(`Tip / 100 (%) : ${tip_percent}`);
});
tip_10pc.addEventListener("click", () => {
  tip_percent = 0.1;
  console.log(`Tip / 100 (%) : ${tip_percent}`);
});
tip_15pc.addEventListener("click", () => {
  tip_percent = 0.15;
  console.log(`Tip / 100 (%) : ${tip_percent}`);
});
tip_25pc.addEventListener("click", () => {
  tip_percent = 0.25;
  console.log(`Tip / 100 (%) : ${tip_percent}`);
});
tip_50pc.addEventListener("click", () => {
  tip_percent = 0.5;
  console.log(`Tip / 100 (%) : ${tip_percent}`);
});

num_people.addEventListener("input", () => {
  // console.log(num_people.value);
  no_of_people = num_people.value;
  console.log(`No. of People: ${no_of_people}`);
});

// Select all buttons inside .btn-grid
const buttons = document.querySelectorAll(".btn-grid button");
const cstmtip = document.querySelector(".btn-grid .cstm-tip");
let previousButton = null;

cstmtip.addEventListener("input", () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = `hsl(183, 100%, 15%)`;
    button.style.color = `hsl(0, 0%, 100%)`;
    tip_percent = 0;
  });
  tip_percent = cstmtip.value / 100;
  console.log(`Selected tip % : ${tip_percent}`);
  console.log(`${tip_amt_p_person}`);
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Reset background color of previously clicked button
    if (previousButton) {
      previousButton.style.backgroundColor = `hsl(183, 100%, 15%)`; // Reset to original color
      previousButton.style.color = `hsl(0, 0%, 100%)`;
    }

    // Set background color of clicked button
    button.style.backgroundColor = `hsl(172, 67%, 45%)`;
    button.style.color = `hsl(183, 100%, 15%)`;
    tip_p_person.textContent = tip_amt_p_person.toFixed(2);
    tot_amt.textContent = tot_bill.toFixed(2);

    // Update previousButton to current button
    previousButton = button;
  });
});

num_people.addEventListener("input", () => {
  no_of_people = num_people.value;
  if (no_of_people < 0) {
    num_people.style.borderColor = `hsl(0, 100%, 50%)`; //red colour
    init_bill = 0;
  } else num_people.style.borderColor = `hsl(172, 67%, 45%)`; //Strong cyan colour

  calcTip(init_bill, tip_percent, no_of_people);

  tip_p_person.textContent = tip_amt_p_person.toFixed(2);
  tot_amt.textContent = tot_bill.toFixed(2);
});

rst_btn.addEventListener("click", () => {
  bill.value = "";
  tip_percent = 0;
  tip_amt_p_person = 0;
  no_of_people = 0;
  tot_bill = 0;
  num_people.value = "";
  tip_p_person.textContent = "0.00";
  tot_amt.textContent = "0.00";

  buttons.forEach((button) => {
    button.style.backgroundColor = `hsl(183, 100%, 15%)`;
    button.style.color = `hsl(0, 0%, 100%)`;
  });
});
