function mostrar()
{
	var letraIngresada;
	var numeroIngresado;
	var respuesta="si";
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var promedioPositivos;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var sumaNegativos=0;
	var maximo;
	var minimo;
	var letraMaximo;
	var letraMinimo;

	while(respuesta=="si")
	{
		//pido número y letra
		numeroIngresado=prompt("Ingrese un número entre -100 y 100");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) || numeroIngresado<-100||numeroIngresado>100)
		{
			numeroIngresado=prompt("La informacion ingresada no es valida. Ingrese un número entre -100 y 100");
			numeroIngresado=parseInt(numeroIngresado);
		}

		letraIngresada=prompt("Ingrese una letra");
		while(!isNaN(letraIngresada))
		{
			letraIngresada=prompt("La informacion ingresada no es valida. Ingrese una letra");
		}	

		respuesta=prompt("Ingrese 'si' para ingresar otro dato");

		//Cantidad de numeros pares, impares y ceros
		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}
		else
		{
			if(numeroIngresado=0)
			{
				contadorCeros++;
			}
			else
			{
				contadorImpares++;
			}	
		}

		// d)Promedio positivos e) suma negativos
		if(numeroIngresado>0)
		{
			acumuladorPositivos+=numeroIngresado;
			contadorPositivos++;
		}
		else(numeroIngresado)
		{
			sumaNegativos+=numeroIngresado;
		}

		// f) El número y la letra del máximo y el mínimo.
		if(numeroIngresado>maximo||maximo==undefined)
		{
			maximo=numeroIngresado;
			letraMaximo=letraIngresada;
		}
		if(numeroIngresado<minimo||minimo==undefined)
		{
			minimo=numeroIngresado;
			letraMinimo=letraIngresada;
		}
		

	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;

	document.write("Cantidad de numeros pares: "+contadorPares,"<br>Cantidad de números impares: "+contadorImpares,"<br>Cantidad de ceros: "+contadorCeros,"<br>Promedio positivos: "+promedioPositivos,"<br>Suma negativos: "+sumaNegativos,"<br>Numero y letra maximo: "+maximo+letraMaximo,"<br>Numero y letra minimo: "+minimo+letraMinimo);
}
