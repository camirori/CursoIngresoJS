/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numUno=numeroUno.value;
	var numDos=numeroDos.value;
	numUno=parseInt(numUno);
	numDos=parseInt(numDos);
	alert("La suma es "+(numUno+numDos));
}

function restar()
{
	var numUno=numeroUno.value;
	var numDos=numeroDos.value;
	numUno=parseInt(numUno);
	numDos=parseInt(numDos);
	alert("La resta es "+(numUno-numDos));
}

function multiplicar()
{ 
	var numUno=numeroUno.value;
	var numDos=numeroDos.value;
	numUno=parseInt(numUno);
	numDos=parseInt(numDos);
	alert("La multiplicacion es "+(numUno*numDos));
}

function dividir()
{
	var numUno=numeroUno.value;
	var numDos=numeroDos.value;
	numUno=parseInt(numUno);
	numDos=parseInt(numDos);
	alert("La division es "+(numUno/numDos));
}

