function mostrar()
{
	var precioIngresado;
	var porcentajeIngresado;
	var descuento;
	var precioConDescuento;
	var IVA;
	var precioFinal;

	precioIngresado=prompt("Ingrese el precio");
	porcentajeIngresado=prompt("Ingrese el porcentaje de descuento");

	precioIngresado=parseInt(precioIngresado);
	porcentajeIngresado=parseInt(porcentajeIngresado);

	descuento=precioIngresado*(porcentajeIngresado/100);
	//precioConDescuento=precioIngresado*(1-porcentajeIngresado/100);
	precioConDescuento=precioIngresado-descuento;
	IVA=precioConDescuento*0.21;
	precioFinal=precioConDescuento+IVA;

	alert("Descuento: $"+descuento+", precio con descuento: $"+precioConDescuento+", IVA: $"+IVA);
	elPrecioFinal.value="El precio final con descuento es "+precioFinal;
}
