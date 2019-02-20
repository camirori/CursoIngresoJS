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
			document.write(divisores+", ");
		}
	}

	document.write("cantidad de divisores: "+contadorDivisores);



}//FIN DE LA FUNCIÓN