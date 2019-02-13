function mostrar()
{
	/*al realizar una compra, si compra de mas de dos productos se realiza un descuento del %10 y si supera 
	los $2000 se agrega undescuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final 
	se le agrega un 10% de recargo*/

	var cantidadProductos;
	var montoCompra;
	var medioPago;

	cantidadProductos=prompt("Cuàntos productos ha comprado?");
	cantidadProductos=parseInt(cantidadProductos);
	montoCompra=prompt("Cuàl es el monto de su compra?");
	montoCompra=parseInt(montoCompra);	
	medioPago=prompt("Ha abonado mediante tarjeta (t) o efectivo (e)?")


	if (cantidadProductos>2) 
	{
		montoCompra=montoCompra*0.9;

		if (montoCompra>2000) 
		{
			montoCompra=montoCompra*0.85;
		}
	}

	if (medioPago=="t") 
	{
		montoCompra=montoCompra*1.1;
	}

	montoCompra=Math.round(montoCompra);

	alert("El monto final de su compra es de $"+montoCompra);


}
