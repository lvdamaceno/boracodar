function getCardNumberFromInput(number) {
  console.log(number.value)
  document.getElementById('cardNumber').innerText = number.value
}

function getCardNameFromInput(name) {
  console.log(name.value)
  document.getElementById('cardName').innerText = name.value
}

function getCardExpirationDateFromInput(expdate) {
  console.log(expdate.value)
  document.getElementById('cardExpirationDate').innerText = expdate.value
}