/**
  En este código se hace uso de la metodo process que tiene dos tipos de
  propiedades stdout y stdin; uno permite mandar datos en pantalla y 
  el otro cachar los datos del teclado y procesarlos.
  Se usa el método TRIM para limpiar el dato de caracteres especiales.
***/

var nom;
process.stdout.write("¿cuál su nombre? \n");
process.stdin.on('data', function(data){
    nom = data.toString().trim();
    process.stdout.write("hola "+nom+", bienvenido a nodejs\n");
    process.exit();
});
