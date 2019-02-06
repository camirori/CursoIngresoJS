/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var vSueldo=sueldo.value;
	vSueldo=parseInt(vSueldo);
	resultado.value=(vSueldo*1.1);
}
