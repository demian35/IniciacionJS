
let v1=true;
let v2=false;

//operacion logica and
let andresultado= v1 && v2;
document.write("El resultado de v1 && v2 es: "+ andresultado);
console.log(andresultado);


document.write("<br>")

//operacion logica or
let orresultado= v1 || v2;
document.write("El resultado de v1 v v2 es: "+ orresultado);
console.log(orresultado);



document.write("<br>")
//negacion
let v3=!true

document.write("v3 negada es: "+ v3 );

//comparaciones 

let num1=23;
let num2=43;
let num3=56;
let num4=67;
let num5=78;
let num6=63;

let resulatado= (num2 < num1) && (num3 != num4);



document.write("<br>");
document.write(resulatado);
console.log(resulatado);

let resultado2=(!(num1 < num6) && (num3 === num5)) && ((num4!=num2) || (num6> num1));

document.write("<br>");
document.write(resultado2);
console.log(resultado2);

