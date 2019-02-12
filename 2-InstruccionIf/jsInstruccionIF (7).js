function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var estadoIngresado;
	
	edadIngresada=edad.value;
	estadoIngresado=estadoCivil.value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<18&&estadoIngresado!="Soltero")
	{
		alert("Usted es muy pequeño para NO ser soltero");
	}
	

}//FIN DE LA FUNCIÓN