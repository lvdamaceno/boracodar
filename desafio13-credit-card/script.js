function getCardNumberFromInput(number) {
  document.getElementById('detailCardNumber').innerText = number.value
}

function getCardNameFromInput(name) {
  document.getElementById('cardName').innerText = name.value
}

function getCardExpirationDateFromInput(expdate) {
  document.getElementById('detailCardExpirationDate').innerText = expdate.value
}

// MASKS
IMask(document.querySelector('#cvv'), {
  mask: '0000'
})

IMask(document.querySelector('#cardNumber'), {
  mask: '0000 0000 0000 0000'
})

IMask(document.querySelector('#expirationDate'), {
  mask: 'MM{/}YY',
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    }
  }

})