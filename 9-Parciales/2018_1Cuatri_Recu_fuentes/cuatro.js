function mostrar()
{
	/*
	var respuesta;
	var primerNumeroIngresado;
	var segundoNumeroIngresado;

	primerNumeroIngresado=prompt("Ingrese un número");
	segundoNumeroIngresado=prompt("Ingrese otro número");

	primerNumeroIngresado=parseInt(primerNumeroIngresado);
	segundoNumeroIngresado=parseInt(segundoNumeroIngresado);

	if(primerNumeroIngresado==segundoNumeroIngresado)	
	{
		alert("Los números ingresados son "+primerNumeroIngresado+" y "+segundoNumeroIngresado);
	}
	else if(primerNumeroIngresado>segundoNumeroIngresado)
	{
		respuesta=primerNumeroIngresado/segundoNumeroIngresado;
		alert("La division es "+respuesta);
	}
	else
	{
		respuesta=primerNumeroIngresado+segundoNumeroIngresado;
		if (respuesta<50) 
		{
			alert("La suma es "+respuesta+" y es menor a 50");
		}
		else
		{
			alert("La suma es "+respuesta);
		}
		
	}*/

	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var tercerNumeroIngresado;
	var cuartoNumeroIngresado;
	//var contadorIngresados=0;
	var suma;
	var mayor;
	var porcentaje;
	var importe;


	primerNumeroIngresado=prompt("Ingrese un numero");
	segundoNumeroIngresado=prompt("Ingrese un numero");
	tercerNumeroIngresado=prompt("Ingrese un numero");
	cuartoNumeroIngresado=prompt("Ingrese un numero");
	

	primerNumeroIngresado=parseInt(primerNumeroIngresado);
	segundoNumeroIngresado=parseInt(segundoNumeroIngresado);
	tercerNumeroIngresado=parseInt(tercerNumeroIngresado);
	cuartoNumeroIngresado=parseInt(cuartoNumeroIngresado);

	suma=primerNumeroIngresado+segundoNumeroIngresado+tercerNumeroIngresado+cuartoNumeroIngresado;

	/*
	while(contadorIngresados<4)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		suma+=numeroIngresado;
		contadorIngresados++;
	}*/

	if(primerNumeroIngresado>segundoNumeroIngresado&&primerNumeroIngresado>tercerNumeroIngresado&&primerNumeroIngresado>cuartoNumeroIngresado)
	{
		mayor=primerNumeroIngresado;
	}
	else
	{
		if (segundoNumeroIngresado>primerNumeroIngresado&&segundoNumeroIngresado>tercerNumeroIngresado&&segundoNumeroIngresado>cuartoNumeroIngresado) 
		{
			mayor=segundoNumeroIngresado;
		}
		else
		{
			if (tercerNumeroIngresado>primerNumeroIngresado&&tercerNumeroIngresado>segundoNumeroIngresado&&tercerNumeroIngresado>cuartoNumeroIngresado) 
			{
				mayor=tercerNumeroIngresado;
			}
			else
			{
				mayor=cuartoNumeroIngresado;
			}
		}
	}

	if (suma>100) 
	{
		porcentaje=0.9;

	}
	else if(suma>50)
	{
		porcentaje=0.95;
	}
	else
	{
		porcentaje=1.15;
	}

importe=suma*porcentaje;
importe=parseInt(importe);
mayor=Math.max(primerNumeroIngresado, segundoNumeroIngresado, tercerNumeroIngresado, cuartoNumeroIngresado);

alert("El numero mayor es "+mayor+". El importe final es "+importe);


}
