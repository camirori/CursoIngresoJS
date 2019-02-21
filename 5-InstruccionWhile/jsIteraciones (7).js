function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=='si')
	{
		
		/*if(respuesta=="no")
		{
			break;
		}*/
		numeroIngresado=prompt("Indicar un nùmero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador+=numeroIngresado;
		contador++;
		respuesta=prompt("Desea ingresar otro nùmero? si / no");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN