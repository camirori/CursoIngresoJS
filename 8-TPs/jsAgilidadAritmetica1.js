/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primerNumero;
var segundoNumero;
var operador;
var resultado;
var respuesta;


function comenzar()
{
	primerNumero=Math.floor(Math.random()*10)+1;
	segundoNumero=Math.floor(Math.random()*10)+1;	
	operador=Math.floor(Math.random()*4)+1;

	PrimerNumero.value=primerNumero;
	SegundoNumero.value=segundoNumero;

	switch(operador)
	{
		case 1:
			Operador.value="+";
			resultado=primerNumero+segundoNumero;
			break;
		case 2:
			Operador.value="-";
			resultado=primerNumero-segundoNumero;
			break;
		case 3:
			Operador.value="*";
			resultado=primerNumero*segundoNumero;
			break;
		case 4:
			Operador.value="/";
			resultado=primerNumero/segundoNumero;
	}
	console.log(resultado);


}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=Respuesta.value;
	if (respuesta==resultado) 
	{
		alert("Su respuesta es correcta.");
	}
	else{ alert("Su respuesta es incorrecta.");}

	Respuesta.value="";
	comenzar();

}//FIN DE LA FUNCIÓN
