// var che trova il suono
var sound = document.getElementById("sound");
// var che capisce se l'operazione è finita
var finito = false ;

var stylecount = 0;
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
}

// funzione che esegue l'espressione scritta
function risultato() 

{
sound.load()
	sound.play();
 document.getElementById("display").innerHTML=eval(document.getElementById("display").innerHTML);
 finito= true; }


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
	document.getElementById("display").innerHTML="0"; }


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
	else{
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/style.css")
	};
}


function styleminus() {
	stylecount = stylecount - 1
	if (stylecount == 1) {
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/black.css")
	}
	else {
		document.getElementsByTagName("link")[0].setAttribute("href" , "style/style.css")
	};
}