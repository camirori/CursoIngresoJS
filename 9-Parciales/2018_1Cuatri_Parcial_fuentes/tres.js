function mostrar()
{
	var precioIngresado;
	var precioIngresado;
	var precioFinal;

	precioIngresado=prompt("Ingrese el precio");
	precioIngresado=prompt("Ingrese el porcentaje de descuento")

	precioFinal=precioIngresado*(1-precioIngresado/100)

	elPrecioFinal.value="El precio final con descuento es "+precioFinal;
}
