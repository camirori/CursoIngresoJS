/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numDividendo;
	var numDivisor;
	var resto;

	numDividendo=numeroDividendo.value;
	numDivisor=numeroDivisor.value;
	//numDividendo=parseInt(numDividendo);
	//numDivisor=parseInt(numDivisor);

	resto=numDividendo%numDivisor;
	alert("El resto es "+resto);
}
