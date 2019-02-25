function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivo;
	var promedioNegativo;
	var diferenciaPositivoNegativo;

	while(respuesta!="no")
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

		respuesta=prompt("Desea ingresar otro número?");

		if(numeroIngresado>0)
		{
			sumaPositivos+=numeroIngresado;
			cantidadPositivos++;
	
		}
		else if(numeroIngresado<0)
		{
			sumaNegativos+=numeroIngresado;
			cantidadNegativos++;

		}
		else if(numeroIngresado==0)
		{
			cantidadCeros++;
		}
		if(numeroIngresado%2==0)
		{
			cantidadPares++;
		}
	
	}
	promedioPositivo=sumaPositivos/cantidadPositivos;
	promedioNegativo=sumaNegativos/cantidadNegativos;
	diferenciaPositivoNegativo=sumaPositivos+sumaNegativos;

	document.write("Suma positivos "+sumaPositivos,", cantidad positivos "+cantidadPositivos,", promedio positivos "+promedioPositivo,", Suma negativos "+sumaNegativos,", cantidad negativos "+cantidadNegativos,", promedio negativos "+promedioNegativo,", diferencia positivos y negativos "+diferenciaPositivoNegativo,", cantidad de ceros "+cantidadCeros,", cantidad de pares "+cantidadPares);


}//FIN DE LA FUNCIÓN