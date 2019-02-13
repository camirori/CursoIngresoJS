function mostrar()
{
	var precioIngresado;
	var porcentajeIngresado;
	var precioFinal;

	precioIngresado=prompt("Ingrese el precio");
	porcentajeIngresado=prompt("Ingrese el porcentaje de descuento");

	precioIngresado=parseInt(precioIngresado);
	porcentajeIngresado=parseInt(porcentajeIngresado);

	precioFinal=precioIngresado*(1-porcentajeIngresado/100);

	elPrecioFinal.value="El precio final con descuento es "+precioFinal;

}
