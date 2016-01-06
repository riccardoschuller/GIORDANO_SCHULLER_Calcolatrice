
// var che permette di non aggiungere operatori su operatori disabilitando la calcolatrice
var operatore = true;
// var che trova il suono
var sound = document.getElementById("sound");
// var che capisce se l'operazione è finita
var finito = false ;

var stylecount = 0;

var punto = false;
// funzione che riporta numeri e operatori nell'espressione e nel display
function n(op)

{
	//parte il suono
	sound.load()
	sound.play();
	// se il numero è 0 o si è gia ottenuto il risultato dell'operazione inizia da capo
if(document.getElementById("display").innerHTML =="0" || document.getElementById("display").innerHTML==null 
	|| finito == true)
{document.getElementById("display").innerHTML=op;
finito = false}
else{document.getElementById("display").innerHTML+=op;}
operatore = false
}

function addOperatore(op)

{if (operatore == false) {
	//parte il suono
	sound.load()
	sound.play();
	// se il numero è 0 o si è gia ottenuto il risultato dell'operazione inizia da capo
if(document.getElementById("display").innerHTML =="0" || document.getElementById("display").innerHTML==null 
	|| finito == true)
{document.getElementById("display").innerHTML=op;
finito = false}
else{document.getElementById("display").innerHTML+=op;}
}
operatore = true;
punto = false};


function addPunto(op)

{if (punto == false) {
	//parte il suono
	sound.load()
	sound.play();
	// se il numero è 0 o si è gia ottenuto il risultato dell'operazione inizia da capo
if(document.getElementById("display").innerHTML =="0" || document.getElementById("display").innerHTML==null 
	|| finito == true)
{document.getElementById("display").innerHTML=op;
finito = false}
else{document.getElementById("display").innerHTML+=op;}
}
punto = true};
// funzione che esegue l'espressione scritta
function risultato() 

{
sound.load()
	sound.play();
 document.getElementById("display").innerHTML=eval(document.getElementById("display").innerHTML);
 finito= true;
 punto = false; }


// funzione che cancella l'ultimo valore digitato
function cancella() 

{ 
	sound.load()
	sound.play();
	document.getElementById("display").innerHTML=document.getElementById("display").innerHTML.substring(0, document.getElementById("display").innerHTML.length-1); }


// funzione che azzera tutto
function azzera() 

{ 
	sound.load()
	sound.play();
	document.getElementById("display").innerHTML="0";
	punto = false; }


// funzione che trova la radice quadrata del numero inserito nel display
function radice()
{

sound.load()
	sound.play();
document.getElementById("display").innerHTML=parseInt(document.getElementById("display").innerHTML);
document.getElementById("display").innerHTML=Math.sqrt(document.getElementById("display").innerHTML);
finito = true;


}

function styleplus() {
	stylecount = stylecount + 1
	if (stylecount == 1) {
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/black.css")
	}
	else if (stylecount == 0){
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/style.css")
	}
	else if (stylecount == 2){
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/fluid.css")
	}
	else if (stylecount == 3){
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/test.css")
	};
}


function styleminus() {
	stylecount = stylecount - 1
	if (stylecount == 1) {
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/black.css")
	}
	else if (stylecount == 0){
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/style.css")
	}
	else if (stylecount == 2){
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/fluid.css")
	}
	else if (stylecount == 3){
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/test.css")
	};
}






 var fart = document.getElementById("fart")

 function nonpremereiltastohome() {
 	fart.load()
 	fart.play()
 };









