function mostrar()
{
	var mesDelAño = document.getElementById('mes').value;
	var dias;

		switch(mesDelAño)
		{
			case "Abril":
			case "Junio":
			case "Septiembre":
			case "Noviembre":
				dias=30;
				break;
			case "Febrero":
				dias=28;
				break;
			default:
				dias=31;
				break;
		}

	alert("El mes tiene "+dias+" días");
	
	



}//FIN DE LA FUNCIÓN