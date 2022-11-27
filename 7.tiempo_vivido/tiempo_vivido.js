var edad;
var decada, lustro, anio, mes, semana, dia, horas, minuto;
process.stdout.write("Introduce su edad\n");
process.stdin.on('data', function(data){
	edad = data.toString().trim();
    decada = edad / 10;
    lustro = edad / 5;
    anio = edad;
    mes = anio * 12;
    semana = anio * 52;
    dias = anio * 365;
    horas = dias * 24;
    minuto = horas * 60;
    process.stdout.write("Cuenta con: "+decada+' decadas, '+lustro+' lustros,'+anio+' años, '+mes+' meses, '+dias+' dias, '+horas+' horas, '+minuto+' minutos vividos.');
    process.exit();
});