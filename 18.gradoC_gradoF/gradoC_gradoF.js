/**
 Codigo que permite convertir grados centigrados a 
 grados fahrenheit.
**/

var gc;
console.log("¿Cuántos grados centigrados hay que convertir?");
process.stdin.on('data', function(data){
	gc = data.toString().trim();
	gf = (gc * 1.8000) + 32.00;
	console.log("La conversión a Fahrenheit es: "+gf);
	process.exit();
})