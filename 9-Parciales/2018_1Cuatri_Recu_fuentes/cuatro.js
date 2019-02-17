function mostrar()
{

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
		
	}
}
