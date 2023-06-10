function next() {
  const list = document.querySelectorAll(".card")

  for (let [item, val] of list.entries()) {
    if (val.classList.contains('show')) {
      var current = item
    }
  }

  limit = list.length - 1
  if (current == limit) {
    var next = 0
    list[current].classList.remove('show')
    list[next].classList.add('show')
  } else {
    list[current].classList.remove('show')
    var next = current + 1
    list[next].classList.add('show')
  }

}

function previous() {
  const list = document.querySelectorAll(".card")

  for (let [item, val] of list.entries()) {
    if (val.classList.contains('show')) {
      var current = item
    }
  }

  if (current == 0) {
    var next = list.length - 1
    list[current].classList.remove('show')
    list[next].classList.add('show')
  } else {
    list[current].classList.remove('show')
    var next = current - 1
    list[next].classList.add('show')
  }

}