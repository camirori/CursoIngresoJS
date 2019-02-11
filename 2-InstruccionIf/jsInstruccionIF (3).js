function mostrar()
{
//tomo la edad  
	var edadIngresada;

	edadIngresada=edad.value;
	edadIngresada=parseInt(edadIngresada);


	if(edadIngresada>17)
	{
		alert("Mayor de edad");
	}
	else
	{
		alert("Menor de edad");
	}

	/*if(edadIngresada<18)
	{
		alert("Menor de edad");
	}*/

}//FIN DE LA FUNCIÓN