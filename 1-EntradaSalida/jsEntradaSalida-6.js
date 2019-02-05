/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno=numeroUno.value;
	var numDos=numeroDos.value;
	numUno=parseInt(numUno);
	numDos=parseInt(numDos);
	alert("La suma es "+(numUno+numDos));
}

