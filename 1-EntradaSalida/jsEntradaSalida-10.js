/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var vImporte=importe.value;
	vImporte=parseInt(vImporte);
	resultado.value=(vImporte*0.75);
}
