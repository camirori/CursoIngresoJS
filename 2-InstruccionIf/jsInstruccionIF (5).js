function mostrar()
{
//tomo la edad  
	var edadIngresada;

	edadIngresada=edad.value;
	edadIngresada=parseInt(edadIngresada);

	
	if(edadIngresada<13||edadIngresada>17)
	{
		alert("Usted no es adolescente");
	}
	

	/*
	if(edadIngresada<13)
	{
		alert("Usted no es adolescente");
	}
	else if (edadIngresada>17)
	{
		alert("Usted no es adolescente");
	}
	*/

	/*
	if(!(edadIngresada>12&&edadIngresada<18))
	{
		alert("Usted no es adolescente");
	}
	*/

}//FIN DE LA FUNCIÓN