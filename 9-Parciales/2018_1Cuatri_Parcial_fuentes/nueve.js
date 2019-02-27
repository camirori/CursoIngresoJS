function mostrar()
{
	var marcaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var respuesta="si";
	var contadorTemperaturaPar=0;
	var contadorTemperaturaMenorCero=0;
	var acumuladorPeso=0;
	var contadorProductos=0;
	var promedioPeso;
	var pesoMaximo;
	var marcaPesoMaximo;
	var pesoMinimo;


	while(respuesta=="si")
	{
		//Ingreso marca, peso, temperatura

		marcaIngresada=prompt("Ingrese la marca del producto");
		while(!isNaN(marcaIngresada))
		{
			marcaIngresada=prompt("La informacion ingresada no es valida. Ingrese la marca del producto");
		}

		pesoIngresado=prompt("Ingrese el peso del producto, entre 1 y 100");
		pesoIngresado=parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) || pesoIngresado<1||pesoIngresado>100)
		{
			pesoIngresado=prompt("La informacion ingresada no es valida. Ingrese el peso del producto, entre 1 y 100");
			pesoIngresado=parseInt(pesoIngresado);
		}

		temperaturaIngresada=prompt("Ingrese la temperatura de almacenamiento del producto, entre -30 y 30");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada) || temperaturaIngresada<-30||temperaturaIngresada>30)
		{
			temperaturaIngresada=prompt("La informacion ingresada no es valida. Ingrese la temperatura de almacenamiento del producto, entre -30 y 30");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		respuesta=prompt("Ingrese 'si' para ingresar otro dato");

		// a) La cantidad de temperaturas pares. 
		if(temperaturaIngresada%2==0)
		{
			contadorTemperaturaPar++;
		}

		// b) La marca del producto más pesado 
		// f) El peso máximo y el mínimo.
		if(pesoIngresado>pesoMaximo||pesoMaximo==undefined)
		{
			pesoMaximo=pesoIngresado;
			marcaPesoMaximo=marcaIngresada;
		}
		if(pesoIngresado<pesoMinimo||pesoMinimo==undefined)
		{
			pesoMinimo=pesoIngresado;
		}

		// c) La cantidad de productos que se conservan a menos de 0 grados. 
		if(temperaturaIngresada<0)
		{
			contadorTemperaturaMenorCero++;
		}

		// d) El promedio del peso de todos los productos.	
		acumuladorPeso+=pesoIngresado;
		contadorProductos++;

	}

	promedioPeso=acumuladorPeso/contadorProductos;

	document.write("Cantidad de temperaturas pares: "+contadorTemperaturaPar,
					"<br>Marca del producto más pesado: "+marcaPesoMaximo,
					"<br>Cantidad de productos que se conservan a menos de 0 grados: "+contadorTemperaturaMenorCero,
					"<br>Promedio del peso de todos los productos: "+promedioPeso,
					"<br>Peso máximo: "+pesoMaximo,
					"<br>Peso minimo: "+pesoMinimo);

}
