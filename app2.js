var mensaje = "mensaje local";
var resultado =2;

var datos={};
datos.mensaje = "Mensaje local del juego";
datos.resultado =120;

function saludar(){
	console.log(mensaje);
	console.log(resultado);

	console.log(datos.mensaje);
	console.log(datos.resultado);
}

saludar()