var numero = ""
document.getElementById("display").innerHTML = numero;



function getNumber() {
	numero = numero+document.getElementById("sette").getAttribute("data-num")

	document.getElementById("display").innerHTML = numero;	
}

