const list = document.querySelectorAll(".step")
const listHeader = document.querySelectorAll(".formStep")

function currentIndex(listItems) {
  for (let [item, val] of listItems.entries()) {
    if (val.classList.contains('show')) {
      var current = item
    }
  }
  return current
}



function next() {
  current = currentIndex(list)
  limit = list.length - 1
  if (current == limit) {
    var next = 0
    list[current].classList.remove('show')
    list[next].classList.add('show')
    // change header colors
    listHeader[current].classList.remove('active')
    listHeader[next].classList.add('active')

  } else {
    var next = current + 1
    list[current].classList.remove('show')
    list[next].classList.add('show')
    // change header colors
    listHeader[current].classList.remove('active')
    listHeader[next].classList.add('active')
  }
}

function previous() {
  current = currentIndex(list)
  if (current == 0) {
    var next = list.length - 1
    list[current].classList.remove('show')
    list[next].classList.add('show')
    // change header colors
    listHeader[current].classList.remove('active')
    listHeader[next].classList.add('active')
  } else {
    var next = current - 1
    list[current].classList.remove('show')
    list[next].classList.add('show')
    // change header colors
    listHeader[current].classList.remove('active')
    listHeader[next].classList.add('active')
  }
}