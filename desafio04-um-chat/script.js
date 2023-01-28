function newMessage(message) {
  let messages = document.querySelector('.messages')
  // let html = messages.innerHTML
  messages.innerHTML +=
    '<div class="chat" id="right">' +
    '<p class="name-time">Você - 11:37</p>' +
    '<p class="message">' + message + '</p></div>' +
    '</div>'
}

function getVal() {
  const input = document.querySelector("input");
  // console.log(val);
  input.addEventListener("keyup", (event) => {
    const val = document.querySelector('input').value;
    if (event.key === "Enter") {
      newMessage(val)
      input.value = ""
    }
  });
}

