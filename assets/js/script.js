    /*numero=5;
    alert("Esta prueba es desde la etiqueta script");
    console.log("Estamos probando mensajes en la consola");
    console.log(5);
    console.log("\"hola\"");
    console.log(3>5);
    console.log(numero +=2);
    console.log(numero =+2);

    var nombre = prompt ( "Ingrese su nombre" , "" )
    alert( "Hola " +nombre);

    document .write( "Hola " +nombre);

    var sumando1 = prompt( "Hola, coloque un número como primer sumando" ,"10" );
    var sumando2 = prompt( "Hola, coloque un número como segundo sumando" ,"2" );
    sumando1 = parseInt (sumando1);
    sumando2 = parseInt (sumando2);
    var total_suma = sumando1 + sumando2;
    document .write( "La suma entre los dos números es " + total_suma);*/


var nombre=""
var carrera=""
var pagina="";
var ramo1=ramo2=ramo3=""
var nota11=nota12=nota12=0;
var nota21=nota22=nota23=0;
var nota31=nota32=0;
var promedio1=promedio2=promedio3=0;

nombre = prompt ( "Ingrese Nombre" , "Nicolás Galaz" );
carrera = prompt ( "Ingrese carrera" , "Programación" );

ramo1 = prompt ( "Ingrese Primer Ramo" , "HTML" )
nota11 = prompt ( "Ingrese Nota 1 : "+ramo1 , 4 );
nota12 = prompt ( "Ingrese Nota 2 : "+ramo1 , 5 );
nota13 = prompt ( "Ingrese Nota 3 : "+ramo1 , 4 );

ramo2 = prompt ( "Ingrese Segundo Ramo" , "CSS" )
nota21 = prompt ( "Ingrese Nota 1 : "+ramo2 , 3 );
nota22 = prompt ( "Ingrese Nota 2 : "+ramo2 , 3 );
nota23 = prompt ( "Ingrese Nota 3 : "+ramo2 , 6 );

ramo3 = prompt ( "Ingrese Tercer Ramo" , "Javascript" )
nota31 = prompt ( "Ingrese Nota 1 : "+ramo3 , 2 );
nota32 = prompt ( "Ingrese Nota 2 : "+ramo3 , 6 );
    
promedio1 = (parseInt(nota11) + parseInt(nota12) + parseInt(nota13)) / 3;
promedio2= (parseInt(nota21)+parseInt(nota22)+parseInt(nota23))/3;

notarequerida=12-(parseInt(nota31)+parseInt(nota32));


document.write('    <header class="row justify-content-between align-items-center">    ');
document.write('        <div class="col-6"><h3 class="mt-2 py-3 font-weight-bold mx-5">Notas finales</h3></div>');
document.write('        <div class="col-4 mt-3"><img src="assets/img/Logo-desafio.png" alt="" srcset=""></div>');
document.write('    </header>');
document.write('    <div class="row ">');
document.write('       <div class="col-md-3 mx-5 text-left font-weight-bold">Nombre :</div>');
document.write('       <div class="col-md-3 mx-5 px-5">'+nombre+'</div>');
document.write('    </div>');
document.write('    <div class="row ">');
document.write('       <div class="col-md-3 mx-5 text-left font-weight-bold">Carrera :</div>');
document.write('       <div class="col-md-3 mx-5 px-5">'+carrera+'</div>');
document.write('    </div>');
document.write(" <div class='contain bt-5 mt-5'>");
document.write("    <div class='row text-white text-left mx-5'>");
document.write("        <div class='col-lg-2 font-weight-bold bg-dark '>");
document.write("           <span>Ramo</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-dark '>");
document.write("            <span>Nota 1</span>");
document.write("       </div>");
document.write("        <div class='col-lg-2 bg-dark '>");
document.write("           <span>Nota 2</span>");
document.write("       </div>");
document.write("        <div class='col-lg-2 bg-dark '>");
document.write("            <span>Nota 3</span>");
document.write("        </div>");
document.write("        <div class='col-lg-2 bg-dark '>");
document.write("           <span>Promedio</span>");
document.write("        </div>  ");
document.write("    </div>");

document.write("   <div class='row bg-custom text-black text-left mx-5'>");
document.write("       <div class='col-lg-2 bg-success text-white font-weight-bold'>");
document.write("           <span>"+ramo1+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("           <span>"+nota11+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("            <span>"+nota12+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("            <span>"+nota13+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("            <span>"+promedio1.toFixed(2)+"</span>");
document.write("       </div> ");
document.write("    </div>");


document.write("   <div class='row bg-custom text-black text-left mx-5'>");
document.write("       <div class='col-lg-2 bg-success text-white font-weight-bold'>");
document.write("           <span>"+ramo2+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("           <span>"+nota21+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("            <span>"+nota22+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("            <span>"+nota23+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("            <span>"+promedio2.toFixed(2)+"</span>");
document.write("       </div> ");
document.write("    </div>");
document.write("   <div class='row bg-custom text-black text-left mx-5'>");
document.write("       <div class='col-lg-2 bg-success text-white font-weight-bold'>");
document.write("           <span>"+ramo3+"</span>");
document.write("        </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("           <span>"+nota31+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("            <span>"+nota32+"</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("           <span>-</span>");
document.write("       </div>");
document.write("       <div class='col-lg-2 bg-secondary text-white'>");
document.write("            <span></span>");
document.write("       </div> ");  
document.write("    </div>");
document.write("</div>");
document.write("<p class='mx-5 text-left py-5'>Para aprobar el ramo javascript con nota 4, necesitas obtener un "+notarequerida+" en la nota 3.</p>");


