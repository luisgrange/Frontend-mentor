function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
      
function verify(){
  const response = emailIsValid(document.querySelector("#send").value);
  if(!response){
    document.querySelector("#send").style.border = "1px solid var(--Light-Red)";
    document.querySelector("#response").innerHTML = "Please provide a valid email addres";
  } 
  else{
    document.querySelector("#send").value = "";
  }
}
