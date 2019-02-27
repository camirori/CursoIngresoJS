function mostrar()
{	/*
	var numeros;

	for(numeros=1;numeros<11;numeros++)
	{
		document.write(numeros+", ");
	}
	*/

	var numeroRandom;
	var contador;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;


	for(contador=0;contador<100;contador++)
	{
		numeroRandom=Math.floor(Math.random()*10+1);
		console.log(numeroRandom);

		switch(numeroRandom)
		{
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				contador6++;
				break;
			case 7:
				if(contador7/contador>0.07)
				{
					contador--;
					continue;
				}
				contador7++;
				break;
			case 8:
				contador8++;
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
			case 10:
				contador10++;
				break;
		}
	}

	console.log("El 1 salio: "+contador1+" veces, el "+contador1/contador*100+"% de las veces"+
				"\nEl 2 salio: "+contador2+" veces, el "+contador2/contador*100+"% de las veces"+
				"\nEl 3 salio: "+contador3+" veces, el "+contador3/contador*100+"% de las veces"+
				"\nEl 4 salio: "+contador4+" veces, el "+contador4/contador*100+"% de las veces"+
				"\nEl 5 salio: "+contador5+" veces, el "+contador5/contador*100+"% de las veces"+
				"\nEl 6 salio: "+contador6+" veces, el "+contador6/contador*100+"% de las veces"+
				"\nEl 7 salio: "+contador7+" veces, el "+contador7/contador*100+"% de las veces"+
				"\nEl 8 salio: "+contador8+" veces, el "+contador8/contador*100+"% de las veces"+
				"\nEl 9 salio: "+contador9+" veces, el "+contador9/contador*100+"% de las veces"+
				"\nEl 10 salio: "+contador10+" veces, el "+contador10/contador*100+"% de las veces")

}