

function n(op)

{
if(document.getElementById("display").innerHTML =="0" || document.getElementById("display").innerHTML==null)
{document.getElementById("display").innerHTML=op;}
else{document.getElementById("display").innerHTML+=op;}
}


function risultato() { document.getElementById("display").innerHTML=eval(document.getElementById("display").innerHTML); }

function cancella() { document.getElementById("display").innerHTML=document.getElementById("display").innerHTML.substring(0, document.getElementById("display").innerHTML.length-1); }

function azzera() { document.getElementById("display").innerHTML="0"; }