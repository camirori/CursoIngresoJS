function mostrar()
{
	var numeroIngresado;
	var pares;
	var contadorPares;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(pares=2;true;pares++2)
	{
		contadorPares++;
		write.document(pares+", "," cantidad de pares "+contadorPares);
		if (numeroIngresado<pares) 
		{
			break;
		}

	}




}//FIN DE LA FUNCIÓN