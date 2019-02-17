function mostrar()
{
	var diaIngresado;

	diaIngresado=prompt("Ingrese un día de la semana");

	switch(diaIngresado)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		{
			alert("A trabajar");
			break;
		}

		case "sabado":
		case "domingo":
		{
			alert("Buen finde");
			break;
		}
		default:
		{
			alert("El día no es válido");
			break;
		}

	}
}
