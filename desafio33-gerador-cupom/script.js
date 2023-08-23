function getInputValue() {
  // Selecting the input element and get its value 
  var name = document.getElementById("name").value;
  var url = "https://github.com/" + name + ".png"

  document.getElementById("profile-picture").src = url;
  document.getElementById("profile-name").innerHTML = "@" + name
}



