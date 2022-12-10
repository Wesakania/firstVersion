function country(){
  let identity = prompt("Which country do you come from?");
  document.getElementById("mine").innerHTML = identity;
}
country();