function Button() {
  var button = document.getElementById("button")
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (element.classList.contains("dark-mode")){
    let msg = "On rallume plutôt ?";
    button.innerHTML = msg;
  }
  else{
    let msg = "On éteint la lumière ?";
    button.innerHTML = msg;
  }
}