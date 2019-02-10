function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var estadoIngresado;

	edadIngresada=edad.value;
	estadoIngresado=estadoCivil.value;

	if(edadIngresada>=18&&estadoIngresado=="Soltero")
	{
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN