/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;

	largo=Largo.value;
	ancho=Ancho.value;

	perimetro=(largo*2+ancho*2)*3;

	alert("Comprar "+perimetro+" metros de alambre");

}
function Circulo () 
{
	var radio;
	var perimetro;

	radio=Radio.value;

	perimetro=Math.PI*2*radio*3;
	perimetro=Math.round(perimetro);

	alert("Comprar "+perimetro+" metros de alambre");

}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var bolsasCemento;
	var bolsasCal;
	largo=Largo.value;
	ancho=Ancho.value;

	area=largo*ancho;

	bolsasCemento=area*2;
	bolsasCal=area*3;

	alert("Se necesitan "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" de cal");


}