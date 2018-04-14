$(function(){
var kinds=document.getElementsByClassName('kind');
	//kinds[1].style.display="block";

var uul=document.getElementById("uul");
var uuls=uul.getElementsByTagName('li');

for(var i=0;i<uuls.length;i++){
	uuls[i].index=i;
	
uuls[i].onmouseover=function(){
kinds[this.index].style.display="block";
}
kinds[i].onmouseover=function(){
this.style.display="block";
}
kinds[i].onmouseout=function(){
this.style.display="none";
}
uuls[i].onmouseout=function(){
kinds[this.index].style.display="none";
}
}


});