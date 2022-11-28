/**
 Codigo que permite convertir de pies a metros.
**/

var pies;
process.stdout.write("¿Cuántos pies hay que convertir? \n");
process.stdin.on('data', function(data){
	pies = data.toString().trim();
	mts = pies / 3.2808;
	console.log("La cantidad de metros es: "+mts);
	process.exit();
})