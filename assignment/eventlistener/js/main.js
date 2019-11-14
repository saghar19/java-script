function myfunction1(){
	var person = prompt("please inter your name", "harry patter");
	if (person != null){
		document.getElementById("insert").innerHTML="Hello" + "person" + "! How are you today";
	}
}



	 function myfunction(){
	 	var list = document.getElementsByTagName("ul")[0];
	 	list.getElementsByTagName("li")[0].innerHTML="Cake";
	 }
	function myfunction11(){
	 	var list = document.getElementsByTagName("ul")[0];
	 	list.getElementsByTagName("li")[1].innerHTML="Sweet";
	 }




	 function changecolor() {
	 	var x = document.getElementById("change");
	 	var y = x.getElementsByClassName("child");
	 	var i;
	 	for (i = 0; i < y.lenght; i++){
	 		y[i].style.backgroundColor = "green";
	 	}

	 }
	 //function 4
	 function insert(){
	 	document.writeln("<h1>Welcome to JavaScript Programing!</h1>" );


	 }
	 //function 5
	 function toup(){
	 	alert("test");
	 	var x =document.getElementById("fname");
	 	x.value.toUpperCase();
	 }
	//function 6
	function onChange(){
		var a = document.getElementById("mySelect").value;
		document.getElementById("changed").innerHTML = "you select: " + a;

	}

//function7
function error(){
	alert('The image could not be loaded');
}

//function 8
function toYellow(x){
	x.style.background = "yellow";
	
}
