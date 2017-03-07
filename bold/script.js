i=0;
 function  celil1(){
     if(i%2==0){ 
document.getElementsByTagName("p")[0].style.fontWeight="bold"
     }
     else{
         document.getElementsByTagName("p")[0].style.fontWeight="normal"
     }
     i++;
}


i=0;
function celil2(){
if(i%2==0){
document.getElementsByTagName("p")[0].style.fontStyle="italic"

}
else{

    document.getElementsByTagName("p")[0].style.fontStyle="normal"
}
i++

}
function tikla(){
  document.getElementsByTagName("p")[0].style.fontSize=document.getElementsByTagName("input")[0].value+"px";
}












