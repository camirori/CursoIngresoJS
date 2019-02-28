function mostrar()
{
	var animalIngresado;
	var pesoIngresado;
	var temperaturaIngresada;
	var respuesta="si";
	var contadorTemperaturaPar=0;
	var contadorTemperaturaMenorCero=0;
	var acumuladorPeso=0;
	var contadorAnimales=0;
	var promedioPeso;
	var pesoMaximo;
	var animalPesoMaximo;
	var temperaturaPesoMaximo;
	var pesoMaximoTemperaturaMenorCero;
	var pesoMinimoTemperaturaMenorCero;


	while(respuesta=="si")
	{
		//Ingreso marca, peso, temperatura

		animalIngresado=prompt("Ingrese el nombre de un animal del zoologico");
		while(!isNaN(animalIngresado))
		{
			animalIngresado=prompt("La informacion ingresada no es valida. Ingrese el nombre de un animal del zoologico");
		}

		pesoIngresado=prompt("Ingrese el peso del animal, entre 1 y 1000");
		pesoIngresado=parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) || pesoIngresado<1||pesoIngresado>1000)
		{
			pesoIngresado=prompt("La informacion ingresada no es valida. Ingrese el peso del animal, entre 1 y 1000");
			pesoIngresado=parseInt(pesoIngresado);
		}

		temperaturaIngresada=prompt("Ingrese la temperatura del habitat, entre -30 y 30");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada) || temperaturaIngresada<-30||temperaturaIngresada>30)
		{
			temperaturaIngresada=prompt("La informacion ingresada no es valida. Ingrese la temperatura del habitat, entre -30 y 30");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		respuesta=prompt("Ingrese 'si' para ingresar otro dato");

		// a) La cantidad de temperaturas pares. 
		if(temperaturaIngresada%2==0)
		{
			contadorTemperaturaPar++;
		}

		//  b) El nombre y temperatura del animal más pesado
		if(pesoIngresado>pesoMaximo||pesoMaximo==undefined)
		{
			pesoMaximo=pesoIngresado;
			temperaturaPesoMaximo=temperaturaIngresada;
			animalPesoMaximo=animalIngresado;
		}			

		// c) La cantidad de animales que viven a menos de 0 grados
		// f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
		if(temperaturaIngresada<0)
		{
			contadorTemperaturaMenorCero++;
			if(pesoIngresado>pesoMaximoTemperaturaMenorCero||pesoMaximoTemperaturaMenorCero==undefined)
			{
				pesoMaximoTemperaturaMenorCero=pesoIngresado;
			}
			if(pesoIngresado<pesoMinimoTemperaturaMenorCero||pesoMinimoTemperaturaMenorCero==undefined)
			{
				pesoMinimoTemperaturaMenorCero=pesoIngresado;
			}
		}
	

		//  d) El promedio del peso de todos los animales
		acumuladorPeso+=pesoIngresado;
		contadorAnimales++;

	}

	promedioPeso=acumuladorPeso/contadorAnimales;
	promedioPeso=parseInt(promedioPeso);

	document.write("Cantidad de temperaturas pares: "+contadorTemperaturaPar,
					"<br>Nombre y temperatura del animal más pesado: "+animalPesoMaximo+" "+temperaturaPesoMaximo,
					"<br>Cantidad de animales que viven a menos de 0 grados: "+contadorTemperaturaMenorCero,
					"<br>Promedio del peso de todos los animales: "+promedioPeso,
					"<br>Peso máximo de todos los animales cuyas temperaturas sean bajo cero: "+pesoMaximoTemperaturaMenorCero,
					"<br>Peso minimo de todos los animales cuyas temperaturas sean bajo cero: "+pesoMinimoTemperaturaMenorCero);
}
