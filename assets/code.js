document.getElementById("login").onclick = function() {
  var a = document.getElementById("username").value.length;
  var p = document.getElementById("password").value.length;
  if(a > 0 && p > 0) {
    window.location.href = "rules.html";
  }
  else{
    document.getElementsByTagName("input")[0].classList.add("red");
    document.getElementsByTagName("input")[1].classList.add("red");
    
  }
}

function select() {  
  
    document.getElementsByTagName("input")[0].classList.remove("red");
    document.getElementsByTagName("input")[1].classList.remove("red");
  
}

document.getElementById("username").onfocus = function() {
  select();
}
document.getElementById("password").onfocus = function() {
  select();
}