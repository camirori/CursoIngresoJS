function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

		respuesta=prompt("Desea ingresar otro número?");

		if(numeroIngresado>=0)
		{
			positivo+=numeroIngresado;
		}
		else
		{
			negativo*=numeroIngresado;
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN