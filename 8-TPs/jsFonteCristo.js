/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	var numeroIngresado;
 	var pares;
 	var contadorPares;
 	var contadorImpares;
 	var impares;
 	var contadorDivisores;
 	var primo;
 	var contadorPrimos;

 	numeroIngresado=numero.value;
 	numeroIngresado=parseInt(numeroIngresado);

	for(pares=0,contadorPares=0;pares<=numeroIngresado;pares+=2)
 	{
 		contadorPares++;
 	}
 	alert(contadorPares);

	for(impares=1,contadorImpares=0;impares<=numeroIngresado;impares+=2)
 	{
 		contadorImpares++;
 	}
 	alert(contadorImpares);
 	

}
