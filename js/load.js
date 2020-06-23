
//var refkey = 'zyxwvutsrqponmlkjihgfedcba';
var m = "";
var key = [];
var n = "";
var resultmessage= [];
//var arrn;
var i;

$(document).ready(function(){
	welcome();
});

function welcome(){
	//console.log("hola");
	document.getElementById("result").innerHTML = "</br>Do not forget the key";
	document.getElementById("respuesta").value ="";
}

function validateAnswer(){

	m = document.getElementById("respuesta").value;
	key = m.slice(0,26);
	n =  m.slice(26);
	document.getElementById("respuesta").value ="";
	translate(n);
	

}

function translate(){
	//arrn= n.split("");

	for(i = 0; i < n.length; i++){
		switch(n[i]){
			case "a":
			resultmessage[i] = key[0];
			break;

			case "b":
			resultmessage[i] = key[1];
			break;

			case "c":
			resultmessage[i] = key[2];
			break;

			case "d":
			resultmessage[i] = key[3];
			break;

			case "e":
			resultmessage[i] = key[4];
			break;

			case "f":
			resultmessage[i] = key[5];
			break;

			case "g":
			resultmessage[i] = key[6];
			break;

			case "h":
			resultmessage[i] = key[7];
			break;

			case "i":
			resultmessage[i] = key[8];
			break;

			case "j":
			resultmessage[i] = key[9];
			break;

			case "k":
			resultmessage[i] = key[10];
			break;

			case "l":
			resultmessage[i] = key[11];
			break;

			case "m":
			resultmessage[i] = key[12];
			break;

			case "n":
			resultmessage[i] = key[13];
			break;

			case "o":
			resultmessage[i] = key[14];
			break;

			case "p":
			resultmessage[i] = key[15];
			break;

			case "q":
			resultmessage[i] = key[16];
			break;

			case "r":
			resultmessage[i] = key[17];
			break;

			case "s":
			resultmessage[i] = key[18];
			break;

			case "t":
			resultmessage[i] = key[19];
			break;

			case "u":
			resultmessage[i] = key[20];
			break;

			case "v":
			resultmessage[i] = key[21];
			break;

			case "w":
			resultmessage[i] = key[22];
			break;

			case "x":
			resultmessage[i] = key[23];
			break;

			case "y":
			resultmessage[i] = key[24];
			break;

			case "z":
			resultmessage[i] = key[25];
			break;

		}
		n[i]++;
	}
	
	document.getElementById("result").innerHTML = resultmessage.join("");


}
			
		
	
	
	

