window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("amount").value),
    years: +(document.getElementById("years").value),
    rate: +(document.getElementById("rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 10000,  years: 10,  rate: 4,};
  const usersAmount = (document.getElementById("amount"));
  usersAmount.value = values.amount; 
  const usersYears = (document.getElementById("years"));
  usersYears.value = values.years;
  const usersRate = (document.getElementById("rate"));
  usersRate.value = values.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
    return (
        (values.amount * monthlyRate)/ (1- Math.pow((1 + monthlyRate), -n))
        ).toFixed(2);
      }


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyInfo = document.getElementById("monthlypayment");
  monthlyInfo.innerText = "$" + monthly; 
}
