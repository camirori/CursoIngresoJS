/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var numero;

function comenzar()
{
	

	numero=Math.floor(Math.random()*3)+1;
	console.log(numero);

	/* 1=piedra
		2=papel
		3=tijera*/

}//FIN DE LA FUNCIÓN

function piedra()
{
	if(numero==1)
	{
		alert("Empató");
	}
	else if (numero==2)
	{
		alert("Perdió");
	}
	else
	{
		alert("Ganó!!");
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	if(numero==1)
	{
		alert("Ganó!!");
	}
	else if (numero==2)
	{
		alert("Empató");
	}
	else
	{
		alert("Perdió");
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(numero==1)
	{
		alert("Perdió");
	}
	else if (numero==2)
	{
		alert("Ganó!!");
	}
	else
	{
		alert("Empató");
	}
}//FIN DE LA FUNCIÓN