/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio=35;
 	var cantidad;
 	var marca;
 	var importe;
 	var descuento;

 	cantidad=Cantidad.value;
 	cantidad=parseInt(cantidad);

 	marca=Marca.value;

 	switch (cantidad)
 	{
 		case 5: 		
 			if(marca=="ArgentinaLuz")
 			{
 				descuento=0.6;
 			}
 			else
 			{
 				descuento=0.7;
 			}
			break;
 		case 4:
 			if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
 			{
 				descuento=0.75;
 			}
 			else
 			{
 				descuento=0.8;
 			}
 			break;
 		case 3:
 			if(marca=="ArgentinaLuz")
 			{
 				descuento=0.85;
 			}
 			else if(marca=="FelipeLamparas")
 			{
 				descuento=0.9;
 			}
 			else
 			{
 				descuento=0.95;
 			}
 			break;
 		case 1:
 		case 2:
 			descuento=1;
 			break;
 		default: //6 o más
 			descuento=0.5;
 			break;
 	}

 	importe=precio*cantidad*descuento;

 	if (importe>120)
 	{
 		IIBB=importe*0.1;
 		importe+=IIBB;
 		alert("Usted pago $"+IIBB+" de IIBB.");
 	}

 	precioDescuento.value=importe;

}
