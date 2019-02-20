function mostrar()
{
	var planetaElegido;

	planetaElegido=prompt("Ingrese un planeta del sistema solar");

	switch(planetaElegido)
	{
		case "tierra":
			alert("Acá vivimos");
			break;
		case "mercurio":
		case "venus":
			alert("Acá hace más calor");
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("Acá hace más frio");
			break;
		default:
			alert("No es un planeta válido");
			break;
	}

}
