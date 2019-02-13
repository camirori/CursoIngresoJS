
function mostrar()
{
	/*var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese el ancho");
	largo=prompt("Ingrese el largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro= ancho*2+largo*2;

	alert("El perímetro es "+perimetro);*/

	//Ejercicio clase
	var nombreIngresadoUno;
	var nombreIngresadoDos;
	var edadIngresadaUno;
	var edadIngresadaDos;
	var suma;

	nombreIngresadoUno=prompt("Ingrese el nombre de la primer persona");
	edadIngresadaUno=prompt("Ingrese la edad de la primer persona");
	nombreIngresadoDos=prompt("Ingrese el nombre de la segunda persona");
	edadIngresadaDos=prompt("Ingrese la edad de la segunda persona");

	edadIngresadaUno=parseInt(edadIngresadaUno);
	edadIngresadaDos=parseInt(edadIngresadaDos);
	suma=edadIngresadaUno+edadIngresadaDos;

	alert("Ustedes son "+nombreIngresadoUno+" y "+nombreIngresadoDos+", sus edades son "+edadIngresadaUno+" y "+edadIngresadaDos+" y la suma de sus edades es "+suma);

}
