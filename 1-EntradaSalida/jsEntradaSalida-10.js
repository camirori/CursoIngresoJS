/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*var vImporte=importe.value;
	vImporte=parseInt(vImporte);
	resultado.value=(vImporte*0.75);*/

	var primerSueldo;
	var descuento;
	var nuevoSueldo;

	primerSueldo=importe.value;
	descuento=0.75;

	nuevoSueldo=primerSueldo*descuento;

	resultado.value=nuevoSueldo;
}
