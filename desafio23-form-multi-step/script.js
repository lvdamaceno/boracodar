const listSteps = document.querySelectorAll(".step")
const listHeader = document.querySelectorAll(".formStep")

function currentIndex(listItems) {
  for (let [item, val] of listItems.entries()) {
    if (val.classList.contains('show')) {
      var current = item
    }
  }
  return current
}

function addRemoveClass(list, current, next, className) {
  list[current].classList.remove(className)
  list[next].classList.add(className)
}

function next() {
  var current = currentIndex(listSteps)
  limit = listSteps.length - 1
  if (current == limit) {
    var next = 0
    addRemoveClass(listSteps, current, next, 'show')
    addRemoveClass(listHeader, current, next, 'active')
  } else {
    var next = current + 1
    addRemoveClass(listSteps, current, next, 'show')
    addRemoveClass(listHeader, current, next, 'active')
  }
}

function previous() {
  var current = currentIndex(listSteps)
  if (current == 0) {
    var next = listSteps.length - 1
    addRemoveClass(listSteps, current, next, 'show')
    addRemoveClass(listHeader, current, next, 'active')
  } else {
    var next = current - 1
    addRemoveClass(listSteps, current, next, 'show')
    addRemoveClass(listHeader, current, next, 'active')
  }
}