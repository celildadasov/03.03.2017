var a=0, b=0, c=0;

function celil2(){
    a++
    if(a%2==1){document.getElementById("square").style.background="green"
     document.getElementById("square").style.height="200px"
      document.getElementById("square").style.width="200px"
   }
   else {
       document.getElementById("square").style.background="green"
     document.getElementById("square").style.height="100px"
      document.getElementById("square").style.width="100px"
   }
    }


function celil1(){
    b++;
    if(b%2==1){
     
      document.getElementById("triangle").style.borderLeft = "100px solid transparent"
       document.getElementById("triangle").style.borderRight = "100px solid transparent"
        document.getElementById("triangle").style.borderBottom = "200px solid red"

   }
   else {
       document.getElementById("triangle").style.borderLeft = "50px solid transparent"
       document.getElementById("triangle").style.borderRight = "50px solid transparent"
        document.getElementById("triangle").style.borderBottom = "100px solid red"

   }
    }
function celil3(){
    c++;
    if(c%2==1){
     
      document.getElementById("circle").style.width = "240px"
       document.getElementById("circle").style.height = "240px"
        

   }
   else {
       document.getElementById("circle").style.width = "120px"
       document.getElementById("circle").style.height = "120px"
      

   }
    }
