

function n(op)

{
if(document.getElementById("display").innerHTML =="0" || document.getElementById("display").innerHTML==null)
{document.getElementById("display").innerHTML=op;}
else{document.getElementById("display").innerHTML+=op;}
}

