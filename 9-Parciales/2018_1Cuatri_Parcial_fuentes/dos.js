function mostrar()
{
  	/*var nombreIngresado;
  	var localidadIngresada;

  	nombreIngresado=elNombre.value;
  	localidadIngresada=laLocalidad.value;

  	alert("Usted es "+nombreIngresado+" y vive en la localidad de "+localidadIngresada);*/
  	
  	//Ejercicio clase

  	var precioIngresado;
  	var recargoIngresado;
  	var recargo;
  	var precioFinal;

  	precioIngresado=prompt("Ingrese el precio");
  	recargoIngresado=prompt("Ingrese el recargo por tarjeta");
  	precioIngresado=parseInt(precioIngresado);
  	recargoIngresado=parseInt(recargoIngresado);

  	recargo=precioIngresado*(recargoIngresado/100);
  	precioFinal=precioIngresado+recargo;

  	alert("El precio del producto en efectivo es: $"+precioIngresado+", con tarjeta tiene un recargo del "+recargoIngresado+"% que seria $"+recargo+" de recargo, costandole final $"+precioFinal);

}
