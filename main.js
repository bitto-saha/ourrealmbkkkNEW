function bk(){
  const mail = document.getElementById("email").value;
  
  
  
  
   var pass = document.getElementById("pass1").value;
   const pass2 = document.getElementById("pass2").value;
  
   if (pass != pass2) {
     alert("check your passwords again!")
   }
   var name = document.getElementById("fname").value.length;
  
   if (name < 5) {
     alert("your name must be 5 characters");
   }
   if (name > 10) {
     alert("There's a limit to select an username. Don't exceed 10 characters");
   }
  
   var pl = document.getElementById("pass1").value.length;
   if (pl < 6) {
     alert("your password must be atleast 6 characters long");
   }
   if (pl >= 31) {
     alert("your password is too long! please ensure that the password you have given is less than or equals to 30.");
   }
}



function tk(){
  
  
  document.getElementById("s").style.display="initial";
  
  
  document.getElementById("q").style.display="none";
  document.getElementById("ic").style.display="initial";
  document.getElementById("io").style.display="none";
}

function pk(){
  
  
document.getElementById("s").style.display = "none";


document.getElementById("q").style.display = "initial";
document.getElementById("ic").style.display = "none";
document.getElementById("io").style.display = "initial";
  
}




  
  document.addEventListener("contextmenu", function(eve){
    
    eve.preventDefault();
    
    
    document.addEventListener("copy", function(eve){
      
      eve.clipboardData.setData("text/plane", "copying is not allowed");
      eve.preventDefault();
    })
  })
  
  //dj


document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {

            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
  
  
}

function mon(){
  
  window.location.href ="redirect.html";
  
}
setInterval("mon", 1000);
  


