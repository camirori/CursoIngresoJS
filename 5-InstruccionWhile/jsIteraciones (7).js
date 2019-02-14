function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(true)
	{
		respuesta=prompt("Desea ingresar otro nùmero? si / no");
		if(respuesta=="no")
		{
			break;
		}
		numeroIngresado=prompt("Indicar un nùmero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador++

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN