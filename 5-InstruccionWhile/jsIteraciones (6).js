function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	

	while(contador<5)
	{
		numeroIngresado=prompt("Indicar un nùmero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador++
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN