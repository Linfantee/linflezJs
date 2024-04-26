/**
 * 
 */

let compras = [];

function calcularAniadir() {
	let user = prompt("Introduzca el nombre del cliente.");
	let costo = prompt("Introduzca el coste del envio en €.");
	let dia = prompt("Introduzca el día.");
	let mes = prompt("Introduzca el mes.");
	let anio = prompt("Introduzca el año.");
    let dia2 = Number(dia);
	let fechaEscrita = (dia + "/" + mes + "/" + anio);
	
	let fechaFinal = ((dia2 +5) + "/" + mes + "/" + anio);

	let compra = { user: user, costo: costo, fechaEscrita: fechaEscrita, fechaFinal: fechaFinal };
	compras.push(compra);

	document.getElementById("user").innerHTML = (compra.user);
	document.getElementById("costo").innerHTML = (compra.costo);
	document.getElementById("fechaEscrita").innerHTML = (compra.fechaEscrita);
	document.getElementById("fechaFinal").innerHTML = (compra.fechaFinal);
}

function calcularQuitar() {

let userE = prompt("Introduzca el nombre para eliminarlo");
	let eliminar = -1;


	for (let eliminarA = 0; i < compras.length; eliminarA++) {

		if (compras[eliminarA].user === userE) {

			eliminar = eliminarA;

			compras.splice(eliminar);
			break;
		}
	}
	if (eliminar !== -1) {

		document.getElementById("userE").innerHTML = ("Se ha eliminado correctamente a: " + userE);
	}

	


}