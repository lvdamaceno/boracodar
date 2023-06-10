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

function addRemoveClass(index, current, next, className) {
  index[current].classList.remove(className)
  index[next].classList.add(className)
}

function next() {
  var current = currentIndex(listSteps)
  limit = listSteps.length - 1
  if (current == limit) {
    addRemoveClass(listSteps, current, 0, 'show')
    addRemoveClass(listHeader, current, 0, 'active')
  } else {
    addRemoveClass(listSteps, current, current + 1, 'show')
    addRemoveClass(listHeader, current, current + 1, 'active')
  }
}

function previous() {
  var current = currentIndex(listSteps)
  if (current == 0) {
    addRemoveClass(listSteps, current, listSteps.length - 1, 'show')
    addRemoveClass(listHeader, current, listSteps.length - 1, 'active')
  } else {
    addRemoveClass(listSteps, current, current - 1, 'show')
    addRemoveClass(listHeader, current, current - 1, 'active')
  }
}