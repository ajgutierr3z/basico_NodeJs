/**
 Codigo que permite convertir galones a litros.
**/

var gln;
console.log("¿Cuántos galones hay que convertir?");
process.stdin.on('data', function(data){
	gln = data.toString().trim();
	lt = gln / 0.21997;
	console.log("El total de litros es: "+lt);
	process.exit();
})