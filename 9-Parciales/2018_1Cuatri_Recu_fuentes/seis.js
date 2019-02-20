function mostrar()
{
	var notaIngresada;

	notaIngresada=laHora.value;
	notaIngresada=parseInt(notaIngresada);

	switch(notaIngresada)
	{
		case 0:
		case 1:
		case 2:
		case 3:
			alert("La próxima se puede");
			break;
		case 4:
		case 5:
		case 6:
			if(notaIngresada<5)
			{
				alert("Raspando. Debes preocuparte más");
			}
			else
			{
				alert("Raspando");
			}
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			if(notaIngresada>8)
			{
				alert("Aprobó. Muy bien.");
			}
			else
			{
				alert("Aprobó");
			}
			break;
		default:
			alert("La nota no es válida");
			break;

	}


}
