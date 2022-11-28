/**
 Codigo que permite convertir de pulgadas a metros.
**/

var plg;
console.log("¿Cuántos pies hay que convertir?");
process.stdin.on('data', function(data){
	plg = data.toString().trim();
	mts = plg / 39.370;
	console.log("La cantidad de metros es: "+mts);
	process.exit();
})