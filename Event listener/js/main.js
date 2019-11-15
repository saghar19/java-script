function myfunction1(){
var person = prompt("please inter your nam" , "harry patter");
if (person != null){
	document.getElementById("insert").innerHTML =" Hello " + "person" + "! How are you";
}
}
//FUNCTION 2
function myFunction(){
	var list =document.getElementsByTagName("ul")[0];
	list.getElementsByTagName("li")[0].innerHTML = "Cake";
}

function myFunction1(){
var list =document.getElementsByTagName("ul")[0];
	list.getElementsByTagName("li")[1].innerHTML = "Candy";	
}

//FUNCTION 3
function changeColor(){
	var x = document.getElementById("change");
	var y = x.getElementsByClassName("child");
	var i;
	for (i =0; i < y.lenght; i++){
		y[i].style.backgroundColor ="green"

	}
}

//FUNCTION 4
function insert(){
	document.writeIn("<h1>Welcome to JavaScript Programing!</h1>");
}

//FUNCTION 5
function toUp(){
	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase();

}


//FUNCTION 6
function onChange(){
	var a = document.getElementById("mySelect").vlue;
	document.getElementById("change").innerHTML ="you selected: "
+ a;
 }


 //FUNCTION 7
 function error(){
 	alert('The image could not be loaded.');
 }


 //FUNCTION 8
 function toYellow(x){
 	x.style.background = "yellow";
 }
 	
 	//FUNCTION 9
 	function keyDown(){
 		alert("You pressed a key inside the input feild");
 	}
 

 //FUNCTION 10
 function mouseDown(){
 	document.getElementById("myP").style.color="red";
 }
