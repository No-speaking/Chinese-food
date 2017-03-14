// JavaScript Document
var i = 1;
 function autoChangeImage(i){                //自动改变图片
 setTimeout("change(i++); ", 1500);
 setTimeout("back(i); ", 1000);
 setTimeout("autoChangeImage(i = (i%5)); ", 1500);
 }
 function change(idNum){
 document.getElementById("radio" + idNum).checked = "checked";
 switch(idNum){
 case 0:
 document.getElementById("image").src ="images/menggu2.jpg";//改变首页图片
 break;
 case 1:
 document.getElementById("image").src = "images/neimeng.jpg";
 break;
 case 2:
 document.getElementById("image").src = "images/neimeng1.jpg";
 break;
 case 3:
 document.getElementById("image").src = "images/neimeng2.jpg";
 break;
 case 4:
 document.getElementById("image").src= "images/neimeng3.jpg";
 break;
 }
 }