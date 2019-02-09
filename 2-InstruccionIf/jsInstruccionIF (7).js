function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var estado;
	edadIngresada=edad.value;
	estado=estadoCivil.value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<18&&estado!="Soltero")
		{alert("Usted es muy pequeño para NO ser soltero");}
	

}//FIN DE LA FUNCIÓN