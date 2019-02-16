var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
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
		ContadorDeEmpates++;

	}
	else if (eleccionMaquina==2)
	{
		alert("Perdió");
		ContadorDePerdidas++;
	}
	else
	{
		alert("Ganó!!");
		ContadorDeGanadas++;
	}	
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function papel()
{
	if(eleccionMaquina==1)
	{
		alert("Ganó!!");
		ContadorDeGanadas++;
	}
	else if (eleccionMaquina==2)
	{
		alert("Empató");
		ContadorDeEmpates++;
	}
	else
	{
		alert("Perdió");
		ContadorDePerdidas++;
	}
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function tijera()
{
	if(eleccionMaquina==1)
	{
		alert("Perdió");
		ContadorDePerdidas++;
	}
	else if (eleccionMaquina==2)
	{
		alert("Ganó!!");
		ContadorDeGanadas++;
	}
	else
	{
		alert("Empató");
		ContadorDeEmpates++;
	}	
	comenzar();
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	ganadas.value=ContadorDeGanadas;
	perdidas.value=ContadorDePerdidas;
	empatadas.value=ContadorDeEmpates;
}