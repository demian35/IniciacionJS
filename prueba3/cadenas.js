
//declarando cadenas con las que trabajare en esta leccion
cadena1="Hola";

cadena2=" como estas mi nombre es ";
//le pedimos al usuario que ingrese algo
cadena3=prompt("ingrese un nombre:");

//uso del metodo concat
resulatado= cadena1.concat(cadena2,cadena3);
//concatenacion tradicional
resultado2= cadena1 + cadena2 + cadena3;

//uso de literate templates para concatenacion de cadenas ${}
const resultado3=`Hola ${cadena3} te gusta js?`


document.write(resulatado);
document.write("<br>")
document.write(resultado2);
document.write("<br>")
document.write(resultado3);