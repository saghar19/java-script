alert(Hello, I am eternal);
console.log (Hello);


function Hello(){
	let name=prompt("hello, what is your name?");
	document.getElementById("demo").innerHTML= "Hello " + name +" Nice work! lets start..,";

}

function cheak(){
	let f =parseInt(document.getElementById("ff").value);
	let c = (document.getElementById(f).value-32) *5/9;
	document.getElementById("Result").innerHTML=c;
}

function check1(){
	if (document.getElementById("bb").cheacked){
		alert("that is true");

	}
	else {alert("false")};

}