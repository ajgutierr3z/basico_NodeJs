/**
 Codigo que permite convertir de pies a pulgadas.
**/

var pies;
console.log("¿Cuántos pies hay que convertir?");
process.stdin.on('data', function(data){
	pies = data.toString().trim();
	plg = pies * 12.000;
	console.log("Las pulgadas son: "+plg);
	process.exit();
})