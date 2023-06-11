const listSteps = document.querySelectorAll(".step")
const listHeader = document.querySelectorAll(".formStep")
const checkIcon = '<i class="ph-bold ph-check"></i>'

function currentIndex(listItems) {
  for (let [item, val] of listItems.entries()) {
    if (val.classList.contains('show')) {
      return item
    }
  }
}

function addRemoveClass(array, current, action, className) {
  array[current].classList.remove(className)
  if (action === 'next') {
    array[current + 1].classList.add(className)
  } else {
    array[current - 1].classList.add(className)
  }
}

function addRemoveCheckIcon(current, action) {
  if (action == 'add') {
    listHeader[current].classList.add('done')
    listHeader[current].querySelector('span').innerHTML = checkIcon
  } else {
    listHeader[current - 1].classList.remove('done')
    listHeader[current - 1].querySelector('span').innerHTML = current
  }
}

function next() {
  var current = currentIndex(listSteps)
  limit = listSteps.length - 1
  if (current != limit) {
    addRemoveClass(listSteps, current, 'next', 'show')
    addRemoveClass(listHeader, current, 'next', 'active')
    addRemoveCheckIcon(current, 'add')
  }
}

function previous() {
  var current = currentIndex(listSteps)
  if (current != 0) {
    addRemoveClass(listSteps, current, 'previous', 'show')
    addRemoveClass(listHeader, current, 'previous', 'active')
    addRemoveCheckIcon(current, 'remove')
  }
}