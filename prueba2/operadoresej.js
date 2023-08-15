//operador para hacer incremento 

let numero=30

numero+=30

document.write("Suma de los numeros 30 + 30 mediante un incremento 30+=30 :  " + numero)
// document.write() funcion para imprimir en la pagina algo

//exponenciacion
let numero2=54

numero2**=3


document.write("<br> 54 elevado al cubo es igual a: " + numero2)


//resta
let numero3=30
numero3-=15
document.write("<br> 30 - 15 es igual a : " + numero3)

 //modulo
let numero4=35
numero4%=3
document.write("<br> 35 mod 3 es igual a : " +numero4) 


  //operadores aritmeticos}
  //suma
let numero5=70
let numero6=35

res1= numero5 + numero6
document.write("<br> 70 + 35 es : " +res1)
alert(res1)

res2= numero5 + numero4
document.write("<br> 70 + 35 mod 3 es : " +res2)
alert(res2)

//resta decremento
 numero5-- //-- es para restarle 1 a algo
document.write("<br> 70 - 1 es : " +numero5)

//division 
numero6=50
numero7=5
res3= numero6/numero7
document.write("<br> 50 entre 5 es igual a: " +res3)

//exponenciacion
res4=numero6**3
document.write("<br> 50 elevado al cubo es: " +res4)


//multiplicacion
 res5= numero6*numero4
 document.write("<br> 50 * (35 mod 3) es :" + res5)

 //resta 
 res6=numero6-numero7
 document.write("<br> 50 - 5 es igual : " +res6)

//modulo
numero8=4
res7=numero6 % numero8
document.write("<br> 50 mod 4 es : " + res7)

let nombre=prompt("Felicidades por aprender a usar los operadores de asignacion y aritmeticos en JS ingrese su nombre: ")
alert("Siguiente fase :" + nombre)