
window.onload=window.onresize=function(){
if(document.getElementById("leirong").clientHeight<document.getElementById("img02").clientHeight){
document.getElementById("leirong").style.height=document.getElementById("img02").offsetHeight+"px";
}
else{
document.getElementById("img02").style.height=document.getElementById("leirong").offsetHeight-400+"px";
}
}