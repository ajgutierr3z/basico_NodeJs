/**
 Codigo que permite convertir kilos a libras
**/

var lib;
process.stdout.write("Escribe el valor en kilos a convertir \n");
process.stdin.on('data', function(data){
	lib = data.toString().trim();
	lib = lib * 2.2;
	console.log("El valor en libras es: "+lib);
	process.exit();
})