/**
 * En este ejercicio se resuelve el calculo del 
 * area de un cuadrado.
 **/

var lado;
var area;
process.stdout.write("Introduce el valor de un lado\n");
process.stdin.on('data', function(data){
	lado = data.toString().trim();
    area = lado * lado;
    process.stdout.write("El valor del area es: "+area);
    process.exit();
});
