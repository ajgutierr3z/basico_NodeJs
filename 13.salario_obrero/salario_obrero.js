/**
 Codigo que permite calcular el salario de un obrero.
**/

var hr;
process.stdout.write("¿Cuántas horas trabajo el obrero? 80hr = 15a \n");
process.stdin.on('data', function(data){
	hr = data.toString().trim();
	sal = hr * 50;
	com = sal * 0.02;
	salcom = sal + com;
	ims = salcom * 0.015;
	ispt = salcom * 0.012;
	salnet = salcom - (ims + ispt);
	console.log("Pago de horas trabajadas: "+sal);
	console.log("+")
	console.log("Compensación: "+ com);
	console.log("_________________________________");
	console.log("Salario y Compensación: "+salcom);
	console.log("-")
	console.log("Descuento IMSS: "+ims);
	console.log("Descuento ISPT: "+ispt);
	console.log("_________________________________")
	console.log("Salario neto: "+salnet);
	process.exit();
})