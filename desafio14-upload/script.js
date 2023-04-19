const dropArea = document.querySelector('#upload')

dropArea.addEventListener('dragover', () => {
  dropArea.classList.add('dragover')
})

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover')
})

