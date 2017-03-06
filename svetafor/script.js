i=0;

function a(){
setTimeout(function() {
  
if(i<=5){
document.getElementsByClassName("red")[0].style.background="red";
  document.getElementsByClassName("green")[0].style.background="darkgreen";

}
else if(i>5 && i<=7){
document.getElementsByClassName("yellow")[0].style.background="yellow";
document.getElementsByClassName("red")[0].style.background="darkred";
}
else if(i>7 && i<12){
    document.getElementsByClassName("green")[0].style.background="green";
    document.getElementsByClassName("yellow")[0].style.background="darkgoldenrod";
    document.getElementsByClassName("red")[0].style.background="darkred";
}
if(i>=12){
    i=0;
}
 i++;

console.log(i);
a();
}, 1000);
}

a();