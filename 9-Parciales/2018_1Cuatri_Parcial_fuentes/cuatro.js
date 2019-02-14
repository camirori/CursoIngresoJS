function mostrar()
{
	/*al realizar una compra, si compra de mas de dos productos se realiza un descuento del %10 y si supera 
	los $2000 se agrega undescuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final 
	se le agrega un 10% de recargo*/

	var cantidadProductos;
	var montoCompra;
	var medioPago;
	var descuentoCantidad;
	var descuentoMonto;
	var sobrecargoMedio;
	var precioFinal;
	

	cantidadProductos=prompt("Cuàntos productos ha comprado?");
	montoCompra=prompt("Cuàl es el monto de su compra?");
	medioPago=prompt("Ha abonado mediante tarjeta (t) o efectivo (e)?");

	cantidadProductos=parseInt(cantidadProductos);
	montoCompra=parseInt(montoCompra);	


	if (cantidadProductos>2) 
	{
		descuentoCantidad=montoCompra*0.1;

		if (montoCompra>2000) 
		{
			descuentoMonto=montoCompra*0.15;
		}
		else
		{
			descuentoMonto=0;
		}
	}
	else
	{
		descuentoCantidad=0;
		descuentoMonto=0;
	}

	if (medioPago=="t") 
	{
		sobrecargoMedio=(montoCompra-descuentoCantidad-descuentoMonto)*0.1;
	}
	else
	{
		sobrecargoMedio=0;
	}

	precioFinal=montoCompra-descuentoCantidad-descuentoMonto+sobrecargoMedio;
	precioFinal=Math.round(precioFinal);
	
	/* agregaria mas informacion  al mensaje , cantidad , precio sin descuento y el final*/

	alert("El monto incial de su compra es $"+montoCompra+" y ha comprado "+cantidadProductos+" producto/s. El descuento por cantidad es $"+descuentoCantidad+", el descuento por monto es $"+descuentoMonto+", el sobrecargo por medio de pago es $"+sobrecargoMedio+". El monto final de su compra es de $"+precioFinal);


}
