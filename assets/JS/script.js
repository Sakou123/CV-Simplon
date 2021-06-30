function Button() {
  var button = document.getElementById("button")
  var element = document.body;
  element.classList.toggle("dark-mode");
  
  if (element.classList.contains("dark-mode")){         /* Check si le body est en darkmode pour */
    let msg = "On rallume plutôt ?";                    /* <-- changer le texte du bouton */
    button.innerHTML = msg;
  }
  else{
    let msg = "On éteint la lumière ?";
    button.innerHTML = msg;
  }
}