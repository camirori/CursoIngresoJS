/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
	var conversion;

	temperaturaIngresada=Temperatura.value;

	conversion=(temperaturaIngresada-32)/1.8;
	conversion=Math.round(conversion);

	alert("La temperatura es "+conversion+"° Centígrados");

}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
	var conversion;

	temperaturaIngresada=Temperatura.value;

	conversion=(temperaturaIngresada*1.8)+32;
	conversion=Math.round(conversion);

	alert("La temperatura es "+conversion+"° Fahrenheit");

}
