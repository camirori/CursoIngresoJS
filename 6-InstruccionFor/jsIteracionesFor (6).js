function mostrar()
{
	var numeroIngresado;
	var pares;
	var contadorPares=0;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(pares=2;pares<=numeroIngresado;pares+=2)
	{
		contadorPares++;
		document.write(pares+",");
	}

	document.write(" cantidad de pares: "+contadorPares);

}//FIN DE LA FUNCIÓN