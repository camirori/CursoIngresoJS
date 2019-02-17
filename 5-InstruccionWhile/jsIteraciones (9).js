function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var maximoIngresado;
	var minimoIngresado;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

		respuesta=prompt("Desea ingresar otro número?");

		if(numeroIngresado>maximoIngresado||maximoIngresado==undefined)
		{
			maximoIngresado=numeroIngresado;
		}
		if(numeroIngresado<minimoIngresado||minimoIngresado==undefined)
		{
			minimoIngresado=numeroIngresado;
		}
	
	}

	maximo.value=maximoIngresado;
	minimo.value=minimoIngresado;


}//FIN DE LA FUNCIÓN