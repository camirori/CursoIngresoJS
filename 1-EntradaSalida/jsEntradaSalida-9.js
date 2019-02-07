/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var vSueldo;
	var nuevoSueldo;

	vSueldo=sueldo.value;
	//vSueldo=parseInt(vSueldo); no es necesario
	//resultado.value=(vSueldo*1.1);
	
	nuevoSueldo=vSueldo*1.1;

	resultado.value=nuevoSueldo;
}
