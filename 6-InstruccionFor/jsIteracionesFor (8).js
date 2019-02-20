function mostrar()
{
	var numeroIngresado;
	var contadorDivisores=0;
	var divisores;

	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);

	for(divisores=1; divisores<=numeroIngresado; divisores++)
	{
		if(numeroIngresado%divisores==0)
		{
			contadorDivisores++;
		}
	}

	if(contadorDivisores==2)
	{
		alert("El numero ingresado es primo.");
	}
	else
	{
		alert("El numero ingresado no es primo.");
	}


}//FIN DE LA FUNCIÓN