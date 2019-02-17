/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primerNumeroIngresado;
var segundoNumeroIngresado;

function comenzar()
{
	primerNumeroIngresado=prompt("Ingrese un número");
	segundoNumeroIngresado=prompt("Ingrese otro número");
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	if(primerNumeroIngresado==segundoNumeroIngresado)	
	{
		alert("Los números ingresados son "+primerNumeroIngresado+" y "+segundoNumeroIngresado);
	}
	else if(primerNumeroIngresado>segundoNumeroIngresado)
	{
		respuesta=primerNumeroIngresado-segundoNumeroIngresado;
		alert("La resta es "+respuesta);
	}
	else
	{
		respuesta=primerNumeroIngresado+segundoNumeroIngresado;
		if (respuesta>10) 
		{
			alert("La suma es "+respuesta+" y superó el 10");
		}
		alert("La suma es "+respuesta);
	}

}//FIN DE LA FUNCIÓN
