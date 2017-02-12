var valores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayCalientes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var muestra = 1;
var contador = 0;
var numero;
var max;



$('#btn-anadir').on('click', function() {





 
    
  








    if (muestra == 31) {

        muestra = 1;

        $("#ultimo30").css("border", "0px");

    }
    var posicionNumero = "ultimo" + muestra;

    numero = $("#select").val(); // val = 3
    
         max = valores[numero];

    var id_numero = "n" + numero; // id = n3

    valores[numero]++; //contador de la posición [3] =+ 1

    contador++;
    
    
       for(var i = 0; i<37; i++){
       
       
       
            if(valores[i] > max){
           
                max = valores[i];
               $("#hot1").text(numero);
               
            }
        
        }
    
    
    
    
    
    


    if (numero == 1 || numero == 2 || numero == 3 || numero == 4 || numero == 5 || numero == 6 || numero == 7 || numero == 8 || numero == 9 || numero == 10 || numero == 11 || numero == 12) {


        valores[40]++;

        $("#docena1").text(valores[40]);


        var rojo = 255 - (7 * (valores[40]));
        $("#docena1").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");


    }

    if (numero == 13 || numero == 14 || numero == 15 || numero == 16 || numero == 17 || numero == 18 || numero == 19 || numero == 20 || numero == 21 || numero == 22 || numero == 23 || numero == 24) {


        valores[41]++;

        $("#docena2").text(valores[41]);


        var rojo = 255 - (7 * (valores[41]));
        $("#docena2").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");


    }
    if (numero == 25 || numero == 26 || numero == 27 || numero == 28 || numero == 29 || numero == 30 || numero == 31 || numero == 32 || numero == 33 || numero == 34 || numero == 35 || numero == 36) {


        valores[42]++;

        $("#docena3").text(valores[42]);



        var rojo = 255 - (7 * (valores[42]));
        $("#docena3").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");

    }

    if (numero == 1 || numero == 3 || numero == 5 || numero == 7 || numero == 9 || numero == 11 || numero == 13 || numero == 15 || numero == 17 || numero == 19 || numero == 21 || numero == 23 || numero == 25 || numero == 27 || numero == 29 || numero == 31 || numero == 33 || numero == 35) {


        valores[47]++;

        $("#impar").text(valores[47]);


        var rojo = 255 - (7 * (valores[47]));
        $("#impar").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");


    }

    if (numero == 2 || numero == 4 || numero == 6 || numero == 8 || numero == 10 || numero == 12 || numero == 14 || numero == 16 || numero == 18 || numero == 20 || numero == 22 || numero == 24 || numero == 26 || numero == 28 || numero == 30 || numero == 32 || numero == 34 || numero == 36) {


        valores[44]++;

        $("#par").text(valores[44]);


        var rojo = 255 - (7 * (valores[44]));
        $("#par").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");


    }

    if (numero == 1 || numero == 2 || numero == 3 || numero == 4 || numero == 5 || numero == 6 || numero == 7 || numero == 8 || numero == 9 || numero == 10 || numero == 11 || numero == 12 || numero == 13 || numero == 14 || numero == 15 || numero == 16 || numero == 17 || numero == 18) {


        valores[43]++;

        $("#primera_mitad").text(valores[43]);


        var rojo = 255 - (7 * (valores[43]));
        $("#primera_mitad").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");


    }

    if (numero == 19 || numero == 20 || numero == 21 || numero == 22 || numero == 23 || numero == 24 || numero == 25 || numero == 26 || numero == 27 || numero == 28 || numero == 29 || numero == 30 || numero == 31 || numero == 32 || numero == 33 || numero == 34 || numero == 35 || numero == 36) {


        valores[48]++;

        $("#segunda_mitad").text(valores[48]);


        var rojo = 255 - (7 * (valores[48]));
        $("#segunda_mitad").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");



    }

    if (numero == 1 || numero == 3 || numero == 5 || numero == 7 || numero == 9 || numero == 12 || numero == 14 || numero == 16 || numero == 18 || numero == 19 || numero == 21 || numero == 23 || numero == 25 || numero == 27 || numero == 30 || numero == 32 || numero == 34 || numero == 36) {


        valores[45]++;

        $("#c_rojo").text(valores[45]);

        $("#" + posicionNumero).text(numero);


        $("#" + posicionNumero).css("background", "red");
        $("#" + posicionNumero).css("color", "white");



        var rojo = 255 - (7 * (valores[45]));
        $("#c_rojo").parent().css("background", " rgb(" + rojo + "," + rojo + " , " + rojo + ")");


        var rojo_n = 255 - (7 * (valores[numero]));
        $("#n" + numero).parent().css("background", " rgb(" + rojo_n + "," + rojo_n + " , " + rojo_n + ")");





    }

    if (numero == 2 || numero == 4 || numero == 6 || numero == 8 || numero == 10 || numero == 11 || numero == 13 || numero == 15 || numero == 17 || numero == 20 || numero == 22 || numero == 24 || numero == 26 || numero == 28 || numero == 29 || numero == 31 || numero == 33 || numero == 35) {


        valores[46]++;

        $("#c_negro").text(valores[46]);


        $("#" + posicionNumero).text(numero);


        $("#" + posicionNumero).css("background", "black");
        $("#" + posicionNumero).css("color", "white");


        var rojo = 255 - (7 * (valores[46]));
        $("#c_negro").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");


        var negro_n = 255 - (7 * (valores[numero]));
        $("#n" + numero).parent().css("background", " rgb( 255 ," + negro_n + " , " + negro_n + ")");



    }

    if (numero == 0) {



        valores[0]++;

        var rojo = 255 - (7 * (valores[0]));


        $("#n0").text(valores[0]);



        $("#" + posicionNumero).text(numero);


        $("#" + posicionNumero).css("background", "green");
        $("#" + posicionNumero).css("color", "white");

        $("#n0").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");
        $("#c0").css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");
        $("#c3").css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");

    }


    if (numero == 1 || numero == 2 || numero == 3 || numero == 4 || numero == 5 || numero == 6 || numero == 7 || numero == 8 || numero == 9 || numero == 10 || numero == 11 || numero == 12 || numero == 13 || numero == 14 || numero == 15 || numero == 16 || numero == 17 || numero == 18 || numero == 19 || numero == 20 || numero == 21 || numero == 22 || numero == 23 || numero == 24 || numero == 25 || numero == 26 || numero == 27 || numero == 28 || numero == 29 || numero == 30 || numero == 31 || numero == 32 || numero == 33 || numero == 34 || numero == 35 || numero == 36) {




        valores[numero];

        $("#n" + numero).text(valores[numero]);







    }


















    if (numero == 3 || numero == 6 || numero == 9 || numero == 12 || numero == 15 || numero == 18 || numero == 21 || numero == 24 || numero == 27 || numero == 30 || numero == 33 || numero == 36) {


        valores[37]++;

        $("#fila1").text(valores[37]);


        var rojo = 255 - (7 * (valores[37]));
        $("#fila1").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");


    }
    if (numero == 2 || numero == 5 || numero == 8 || numero == 11 || numero == 14 || numero == 17 || numero == 20 || numero == 23 || numero == 26 || numero == 29 || numero == 32 || numero == 35) {


        valores[38]++;

        $("#fila2").text(valores[38]);


        var rojo = 255 - (7 * (valores[38]));
        $("#fila2").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");

    }

    if (numero == 1 || numero == 4 || numero == 7 || numero == 10 || numero == 13 || numero == 16 || numero == 19 || numero == 22 || numero == 25 || numero == 28 || numero == 31 || numero == 34) {


        valores[39]++;

        $("#fila3").text(valores[39]);



        var rojo = 255 - (7 * (valores[39]));
        $("#fila3").parent().css("background", " rgb( 255 ," + rojo + " , " + rojo + ")");


    }



    $("#").text(valores[numero]); //mostramos las veces que ha salido el numero 3
    
  



    muestra++;


    $("#" + posicionNumero).css("border", "4px solid yellow");
    $("#" + posicionNumero).prev().css("border", "0px");










    $("#contador").text(contador);





});

  
