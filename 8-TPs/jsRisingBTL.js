/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldo;
	var legajo;
	var nacionalidad;

	edad=prompt("Ingrese su edad \(entre 18 y 90 inclusive\)");
	while(edad<18||edad>90)
	{
		edad=prompt("La información ingresada no es válida. \nIngrese su edad \(entre 18 y 90 inclusive\)");
	}
	Edad.value=edad;

	sexo=prompt("Ingrese su sexo \(\“M\” para masculino y \“F\” para femenino\)");
	while(sexo!="M"&&sexo!="F")
	{
		sexo=prompt("La información ingresada no es válida. \nIngrese su sexo \(\“M\” para masculino y \“F\” para femenino\)");
	}
	Sexo.value=sexo;

	estadoCivil=prompt("Ingrese su estadoCivil \(1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos\)");
	while(estadoCivil<1||estadoCivil>4)
	{
		estadoCivil=prompt("La información ingresada no es válida. \n1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos\)");
	}
	EstadoCivil.value=estadoCivil;

	sueldo=prompt("Ingrese su sueldo bruto \(no debe ser menor a 8000\)");
	while(sueldo<8000)
	{
		sueldo=prompt("La información ingresada no es válida. \nIngrese su sueldo bruto \(no debe ser menor a 8000\)");
	}
	Sueldo.value=sueldo;

	legajo=prompt("Ingrese su número de legajo \(numérico de 4 cifras, sin ceros a la izquierda\)");
	while(legajo<1000||legajo>9999)
	{
		legajo=prompt("La información ingresada no es válida. \nIngrese su número de legajo \(numérico de 4 cifras, sin ceros a la izquierda\)");
	}
	Legajo.value=legajo;

	nacionalidad=prompt("Ingrese su nacionalidad \(“A” para argentinos, “E” para extranjeros, “N” para nacionalizados\)");
	while(nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N")
	{
		nacionalidad=prompt("La información ingresada no es válida. \nIngrese su nacionalidad \(“A” para argentinos, “E” para extranjeros, “N” para nacionalizados\)");
	}
	Nacionalidad.value=nacionalidad;		




}
