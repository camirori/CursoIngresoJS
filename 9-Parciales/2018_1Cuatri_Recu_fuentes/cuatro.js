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

	var numeroIngresado;
	var contadorIngresados=0;
	var suma=0;

	while(contadorIngresados<4)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		suma+=numeroIngresado;
		contadorIngresados++;
	}

	if (suma>100) 
	{
		suma*=0.9;
		suma=parseInt(suma);
		alert("El importe final es "+suma);
	}
	else if(suma>50)
	{
		suma*=0.95;
		suma=parseInt(suma);
		alert("El importe final es "+suma);
	}
	else
	{
		suma*=1.15;
		suma=parseInt(suma);
		alert("El importe final es "+suma);
	}




}
