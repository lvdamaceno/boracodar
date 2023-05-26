const collapsableBtn = document.querySelectorAll('.collapsable-toggle');

for (let index = 0; index < collapsableBtn.length; index++) {
  collapsableBtn[index].addEventListener('click', function (e) {
    // e.preventDefault();
    e.stopImmediatePropagation();

    iterateElement = this;

    getCollapsableParent = iterateElement.parentElement;

    if (getCollapsableParent.classList.contains('show')) {
      getCollapsableParent.classList.remove('show')

    } else {
      getCollapsableParent.classList.add('show');
    }
  })
}