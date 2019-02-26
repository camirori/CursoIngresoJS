function mostrar()
{
	var notaIngresada;
	var sexoIngresado;
	var contadorIngreso;
	var promedio=0;
	var notaMinima;
	var sexoNotaMinima;
	var contadorMayorSeis=0;


	for(contadorIngreso=0;contadorIngreso<5;contadorIngreso++)
	{
		//Pido nota y sexo
		notaIngresada=prompt("Ingrese una nota entre 0 y 10");
		notaIngresada=parseInt(notaIngresada);
		while( isNaN(notaIngresada) || notaIngresada<0||notaIngresada>10)
		{
			notaIngresada=prompt("La informacion ingresada no es valida.\nIngrese una nota entre 0 y 10");
			notaIngresada=parseInt(notaIngresada);
		}

		sexoIngresado=prompt("Ingrese sexo (“f” o “m”)");
		while(sexoIngresado!="f"&&sexoIngresado!="m")
		{
			sexoIngresado=prompt("La informacion ingresada no es valida.\nIngrese sexo (“f” o “m”)");
		}

		promedio+=notaIngresada;

		//La nota más baja y el sexo de esa persona
		if (notaIngresada<notaMinima||notaMinima==undefined) 
		{
			notaMinima=notaIngresada;
			sexoNotaMinima=sexoIngresado;
		}
		//La cantidad de varones que su nota haya sido mayor o igual a 6
		if(notaIngresada>5&&sexoIngresado=="m")
		{
			contadorMayorSeis++;
		}
	}

promedio/=contadorIngreso;

alert("Promedio: "+promedio+". La nota mas baja es "+notaMinima+" y el sexo de esa persona es "+sexoNotaMinima+". La contidad de varones cuya nota ha sido mayor o igual a 6 es "+contadorMayorSeis);



}
