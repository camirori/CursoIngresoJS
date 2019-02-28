function mostrar()
{
	/*

	var miArray = new Array();

	miArray[0]=5;
	miArray[1]=74;
	miArray[2]=8;
	miArray[3]=94;
	miArray[4]=5;
	miArray[5]=0;
	miArray[6]=80;
	miArray[7]=789;
	miArray[8]=5;
	miArray[9]=7;

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}
	*/
	var palabra=prompt("Ingrese una palabra");
	var acumuladorPalabra="";
	var acumuladorPalabraInvertida="";

	for(i=0;i<palabra.length;i++)
	{
		if(palabra[i]==" ")
		{
			continue;
		}
		acumuladorPalabra+=palabra[i];
		//console.log(palabra[i]+i);
	}
	console.log(acumuladorPalabra);

	for(i=palabra.length-1;i>=0;i--)
	{
		if(palabra[i]==" ")
		{
			continue;
		}
		acumuladorPalabraInvertida+=palabra[i];
		//console.log(palabra[i]+i);
	}
	console.log(acumuladorPalabraInvertida);

	if(acumuladorPalabra==acumuladorPalabraInvertida)
	{
		console.log("Es un palindromo");
	}else 
	{
		console.log("No es un palindromo");
	}






}//FIN DE LA FUNCIÓN