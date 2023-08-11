//Buttons
const tip05 = document.querySelector("#tip05");
tip05.addEventListener("click", function () {
  calculatePorcentage(5);
});

const tip10 = document.querySelector("#tip10");
tip10.addEventListener("click", function () {
  calculatePorcentage(10);
});

const tip15 = document.querySelector("#tip15");
tip15.addEventListener("click", function () {
  calculatePorcentage(15);
});

const tip25 = document.querySelector("#tip25");
tip25.addEventListener("click", function () {
  calculatePorcentage(25);
});

const tip50 = document.querySelector("#tip50");
tip50.addEventListener("click", function () {
  calculatePorcentage(50);
});

const custom = document.querySelector("#customTip");
custom.addEventListener("input", function () {
  calculatePorcentage(custom.value);
});

// Função para calcular a porcentagem
function calculatePorcentage(tipPercentage) {
  const inputBill = document.querySelector("#numberBill");
  const valor = parseFloat(inputBill.value);

  const inputPeople = document.querySelector("#nunberPeoples");
  const people = parseFloat(inputPeople.value);

  if (isNaN(valor)) {
    alert("Please enter a valid number for the bill amount.");
    return;
  }

  if (isNaN(people) || people == 0) {
    document.getElementById("notZero").innerHTML = "Can't be 0"
    return;
  }

  const desconto = valor * (tipPercentage / 100);
  const descontoPessoa = desconto / people;
  const valorFinal = valor + desconto;

  const valorPessoa = valorFinal / people;
  document.getElementById("notZero").innerHTML = ""
  document.getElementById("resultTotal").innerHTML = descontoPessoa.toFixed(2);
  document.getElementById("resultPeople").innerHTML = valorPessoa.toFixed(2);
}

function resetFields() {
  const inputBill = document.querySelector("#numberBill");
  inputBill.value = "";
  document.getElementById("resultTotal").innerHTML = "0.00";

  const inputPeople = document.querySelector("#nunberPeoples");
  inputPeople.value = "";
  document.getElementById("resultPeople").innerHTML = "0.00";
}

function reset() {
  resetFields();
}