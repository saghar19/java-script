function GrossIncome(){
	let hours= parseInt(document.getElementById("hours").value);
       let rate= parseInt(document.getElementById("rate").value);
       if (hours >40){
       	income = (hours) * (rate);}
       	else{
       		let overtime = (hours - 40) * ((20/100) * rate);
       		income = (overtime + (hours * rate));
       	}
       	document.getElementById("result1").innerHTML = income;

       }



 
function convert(){
	let Fahrenhite =parseInt(document.getElementById("Fahrenhite").value);
	let Celsius = (Fahrenhite- 32) * (5/9);
	document.getElementById("result2").innerHTML = Celsius;
	if (Celsius <0){
		alert("it is freezing");
	}else if (Celsius >30){
		alert("it is too hot");

	}else{
		alert("enjoy the weather");}
	
	
}
function correct(){
	if (document.getElementById("true1").checked && document.getElementById("true2")){
		alert ("you made it");
	}else if (document.getElementById("true1").checked || document.getElementById("true2")){
	     alert("1 of 2! Good Job");

    }
}