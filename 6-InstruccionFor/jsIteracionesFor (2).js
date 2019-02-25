function mostrar()
{
	/*
	var numeros;

	for(numeros=10;numeros>0;numeros--)
	{
		document.write(numeros+", ");
	}
	*/

	//Saber si un numero es primo:
	/*
	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{
		console.log(numeroAnterior);
		if(numeroIngresado%numeroAnterior==0)
		{
			break;
		}
	}

	if(numeroAnterior==1)
	{
		console.log("Es primo");
	}
	else
	{
		console.log("No es primo");
	}
	*/
	//Numeros primos desde n ingresado hasta 0
	/*var numeroIngresado;
	var numeroAnterior;
	var recorrido;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)
	{
		for(numeroAnterior=recorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			//console.log(recorrido);
			if(recorrido%numeroAnterior==0)
			{
				break;
			}
		}

		if(numeroAnterior==1)
		{
			console.log(recorrido+" es primo");
		}
	}
	*/

	//numero perfecto
	var numeroIngresado;
	var recorrido;
	var sumaDivisores=0;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(recorrido=1;recorrido<numeroIngresado;recorrido++)
	{
		if(numeroIngresado%recorrido==0)
		{
			console.log("Divisor "+recorrido);
			sumaDivisores+=recorrido;
		}
	}

	if(sumaDivisores==numeroIngresado)
	{
		alert(numeroIngresado+" es un numero perfecto");
	}

	//Numeros perfectos desde n ingresado hasta 0


}