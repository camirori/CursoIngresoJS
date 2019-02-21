function mostrar()
{
	/*
	var diaIngresado;

	diaIngresado=prompt("Ingrese un día de la semana");

	switch(diaIngresado)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("A trabajar");
			break;
		case "sabado":
		case "domingo":
			alert("Buen finde");
			break;
		default:
			alert("El día no es válido");
			break;
	}*/

	/*Cada habitacion de un hotel tiene un precio, hay promociones
	segun el tipo de pago, si es con tarjeta visa un 10%, si es por paypal un 15%, por mercadoPago un 10%, efectivo 20%, cualquier otro medio solo un 5%.
	Si compraste el paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento.
	Si pagas en efectivo, tenes varias opciones, el paquete"soloDesayunos" te suma un 10% al descuento, si el paquete es "TodoIncluido" te suma un 15% y para el resto de los paquetes no tiene descuento adicional.*/

	var medioDePago;
	var descuento;
	var paquete;
	var importe;

	medioDePago=prompt("Que medio de pago ha utilizado?");
	paquete=prompt("Que paquete ha contratado?");
	importe=prompt("Ingrese el importe a abonar");


	
	

	switch(medioDePago)
	{
		case "tarjeta visa":
			descuento=10;
			break;
		case "paypal":
			switch(paquete)
			{
				case "todoIncluido":
					descuento=25;
					break;
				default:
					descuento=15;
					break;
			}
			break;
		case "mercado pago":
			descuento=10;
			break;
		case "efectivo":
			switch(paquete)
			{
				case "soloDesayunos":
					descuento=30;
					break;

				case "todoIncluido":
					descuento=35;
					break;
				default:
					descuento=20;
					break;
			}
			break;
			
		case "otro":
			descuento=5;
			break;
	}

	importe=importe*(1-descuento/100);

	alert("El descuento aplicado es del "+descuento+"% . El importe final es "+importe);


}
