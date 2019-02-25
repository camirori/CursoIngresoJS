function mostrar()
{
	var notaIngresada;
	var sexoIngresado;
	var edadIngresada;
	var edadMinima;
	var sexoEdadMinima;
	var notaEdadMinima;
	var contadorIngreso;
	var promedio=0;
	var notaMinima;
	var sexoNotaMinima;
	var contadorMayor=0;
	var notaMujer;
	var edadMujer;
	var mensajeNotaMujer="No hubo ninguna mujer";


	for(contadorIngreso=0;contadorIngreso<5;contadorIngreso++)
	{
		//Pido nota, sexo y edad
		notaIngresada=prompt("Ingrese una nota entre 0 y 10");
		notaIngresada=parseInt(notaIngresada);
		while(notaIngresada<0||notaIngresada>10)
		{
			notaIngresada=prompt("La informacion ingresada no es valida.\nIngrese una nota entre 0 y 10");
			notaIngresada=parseInt(notaIngresada);
		}

		sexoIngresado=prompt("Ingrese sexo (“f” o “m”)");

		while(sexoIngresado!="f"&&sexoIngresado!="m")
		{
			sexoIngresado=prompt("La informacion ingresada no es valida.\nIngrese sexo (“f” o “m”)");
		}

		edadIngresada=prompt("Ingrese la edad");
		edadIngresada=parseInt(edadIngresada);

		promedio+=notaIngresada;

		//La nota más baja y el sexo de esa persona
		if (notaIngresada<notaMinima||notaMinima==undefined) 
		{
			notaMinima=notaIngresada;
			sexoNotaMinima=sexoIngresado;
		}
		//La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6
		if(notaIngresada>5&&sexoIngresado=="m"&&edadIngresada>18)
		{
			contadorMayor++;
		}
		//El sexo y la nota del más joven
		if (edadIngresada<edadMinima||edadMinima==undefined) 
		{
			edadMinima=edadIngresada;
			sexoEdadMinima=sexoIngresado;
			notaEdadMinima=notaIngresada;
		}
		//La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.
		if(sexoIngresado=="f"&&notaMujer==undefined)
		{
			notaMujer=notaIngresada;
			edadMujer=edadIngresada;
			mensajeNotaMujer="La nota de la primer mujer ingresada es "+notaMujer+" y su edad "+edadMujer;
		}

	}

	promedio/=contadorIngreso;

	alert("Promedio: "+promedio+". La nota mas baja es "+notaMinima+" y el sexo de esa persona es "+sexoNotaMinima+". La contidad de varones mayores a 18 cuya nota ha sido mayor o igual a 6 es "+contadorMayor+". La nota del mas joven es "+notaEdadMinima+" y su sexo "+sexoEdadMinima+". "+mensajeNotaMujer);

}
