/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var precioPrimero;
	var precioSegundo;
	var precioTercero;
	var calculo;

	precioPrimero=PrecioUno.value;
	precioSegundo=PrecioDos.value;
	precioTercero=PrecioTres.value;

	precioPrimero=parseInt(precioPrimero);
	precioSegundo=parseInt(precioSegundo);
	precioTercero=parseInt(precioTercero);

	calculo=precioPrimero+precioSegundo+precioTercero;

	alert("La suma es "+calculo);

}
function Promedio () 
{
	var precioPrimero;
	var precioSegundo;
	var precioTercero;
	var calculo;

	precioPrimero=PrecioUno.value;
	precioSegundo=PrecioDos.value;
	precioTercero=PrecioTres.value;

	precioPrimero=parseInt(precioPrimero);
	precioSegundo=parseInt(precioSegundo);
	precioTercero=parseInt(precioTercero);

	calculo=(precioPrimero+precioSegundo+precioTercero)/3;

	alert("El promedio es "+calculo);

}
function PrecioFinal () 
{
	var precioPrimero;
	var precioSegundo;
	var precioTercero;
	var calculo;

	precioPrimero=PrecioUno.value;
	precioSegundo=PrecioDos.value;
	precioTercero=PrecioTres.value;

	precioPrimero=parseInt(precioPrimero);
	precioSegundo=parseInt(precioSegundo);
	precioTercero=parseInt(precioTercero);

	calculo=(precioPrimero+precioSegundo+precioTercero)*1.21;

	alert("El precio final es "+calculo);
}