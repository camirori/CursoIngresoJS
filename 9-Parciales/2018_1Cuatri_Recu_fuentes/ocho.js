function mostrar()
{
	var nombreIngresado;
	var cantidadVentasIngresada;
	var cantidadPaginasIngresada;
	var temaIngresado;
	var respuesta="si";
	var contadorPaginaPar=0;
	var contadorPaginaImpar=0;
	var contadorCeroVentas=0;
	var contadorPaginasProgramacion=0;
	var acumuladorVentas=0;
	var contadorLibros=0;


	while(respuesta=="si")
	{
		//nombre, cantidad de páginas, cantidad de ventas (0 o más) y tema (posibles temas: “robótica","programación", "patrones", "base de datos”)

		nombreIngresado=prompt("Ingrese el nombre del libro");
		while(!isNaN(nombreIngresado))
		{
			nombreIngresado=prompt("La informacion ingresada no es valida. Ingrese el nombre del libro");
		}

		cantidadVentasIngresada=prompt("Ingrese la cantidad de ventas, 0 o mas");
		cantidadVentasIngresada=parseInt(cantidadVentasIngresada);
		while(isNaN(cantidadVentasIngresada) || cantidadVentasIngresada<0)
		{
			cantidadVentasIngresada=prompt("La informacion ingresada no es valida. Ingrese la cantidad de ventas, 0 o mas");
			cantidadVentasIngresada=parseInt(cantidadVentasIngresada);
		}

		cantidadPaginasIngresada=prompt("Ingrese la cantidad de paginas");
		cantidadPaginasIngresada=parseInt(cantidadPaginasIngresada);
		while(isNaN(cantidadPaginasIngresada))
		{
			cantidadPaginasIngresada=prompt("La informacion ingresada no es valida. Ingrese la cantidad de paginas");
			cantidadPaginasIngresada=parseInt(cantidadPaginasIngresada);
		}

		temaIngresado=prompt("Ingrese el tema del libro: robotica, programacion, patrones, base de datos");
		while(!isNaN(temaIngresado)||temaIngresado!="robotica"||temaIngresado!="programacion"||temaIngresado!="patrones"||temaIngresado!="base de datos")
		{
			temaIngresado=prompt("La informacion ingresada no es valida. Ingrese el tema del libro: robotica, programacion, patrones, base de datos");
		}

		respuesta=prompt("Ingrese 'si' para ingresar otro dato");

		// a) La cantidad de libros con páginas pares. 
		// b) La cantidad de libros con páginas impares
		if(cantidadPaginasIngresada%2==0)
		{
			contadorPaginaPar++;
		}else
		{
			contadorPaginaImpar++;
		}

		// c) La cantidad de ceros ventas
		if(cantidadVentasIngresada==0)
		{
			contadorCeroVentas++;
		}

		//e) La suma de todas las páginas de los de "programación".
		if(temaIngresado=="programacion")
		{
			contadorPaginasProgramacion++;
		}

		// d) El promedio de todas las ventas ingresadas.
		acumuladorVentas+=cantidadVentasIngresada;
		contadorLibros++;

	}

	promedioPeso=acumuladorVentas/contadorLibros;

	document.write("Cantidad de libros con páginas pares: "+contadorPaginaPar,
					"<br>cantidad de libros con páginas impares: "+contadorPaginaImpar,
					"<br>Marca del producto más pesado: "+marcaPesoMaximo,
					"<br>Cantidad de ceros ventas: "+contadorCeroVentas,
					"<br>Promedio del peso de todos los productos: "+promedioPeso,
					"<br>Peso máximo: "+pesoMaximo,
					"<br>Peso minimo: "+pesoMinimo);
}
