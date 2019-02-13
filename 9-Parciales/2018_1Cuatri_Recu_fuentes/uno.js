
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("Ingresar base");
	altura=prompt("Ingresar altura");

	base=parseInt(base);
	altura=parseInt(altura);

	perimetro=base*3;
	superficie=base*altura;

	alert("El perimetro es "+perimetro+" y su superficie "+superficie);
}
