/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	
	eleccionMaquina=Math.floor(Math.random()*3)+1;
	console.log(eleccionMaquina);

	/* 1=piedra
		2=papel
		3=tijera*/

}//FIN DE LA FUNCIÓN

function piedra()
{
	if(eleccionMaquina==1)
	{
		alert("Empató");
	}
	else if (eleccionMaquina==2)
	{
		alert("Perdió");
	}
	else
	{
		alert("Ganó!!");
	}
	comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==1)
	{
		alert("Ganó!!");
	}
	else if (eleccionMaquina==2)
	{
		alert("Empató");
	}
	else
	{
		alert("Perdió");
	}
	comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==1)
	{
		alert("Perdió");
	}
	else if (eleccionMaquina==2)
	{
		alert("Ganó!!");
	}
	else
	{
		alert("Empató");
	}
	comenzar();
}//FIN DE LA FUNCIÓN