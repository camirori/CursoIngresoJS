function mostrar()
{
	var letraIngresada;
	var numeroIngresado;
	var respuesta="si";
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var promedioPositivos=0;
	var contadorPositivos=0;
	var sumaNegativos=0;
	var maximo;
	var minimo;
	var letraMaximo;
	var letraMinimo;

	while(respuesta=="si")
	{
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
		if(numeroIngresado>0)
		{
			promedioPositivos+=numeroIngresado;
			contadorPositivos++;
		}
		else(numeroIngresado)
		{
			sumaNegativos+=numeroIngresado;
		}
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

	promedioPositivos/=contadorPositivos;

	document.write("Cantidad de numeros pares: "+contadorPares," cantidad de números impares: "+contadorImpares,"Cantidad de ceros: "+contadorCeros,"Promedio positivos: "+promedioPositivos,"Suma negativos: "+sumaNegativos,"Numero y letra maximo: "+maximo+letraMaximo,"Numero y letra minimo: "+minimo+letraMinimo);
}
