var nc;
const cm = 2.54;
var pl;
process.stdout.write("Introduce el número de centímetros\n");
process.stdin.on('data', function(data){
	nc = data.toString().trim();
    pl = nc / cm;
    process.stdout.write("El número de pulgada es: "+pl);
    process.exit();
});