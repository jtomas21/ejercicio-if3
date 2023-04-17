/* 

*/


const PRIMER_PREMIO = 500;
const SEGUNDO_PREMIO = 250;
const TERCER_PREMIO = " un helado gratis";

let primerNumero = prompt("ingresa un numero del 1 al 9")
let segundoNumero = prompt("ingresa el segundo numero y estaras un paso mas cerca del premio")
let tercerNumero = prompt("ingresa el ultimo numero, suerte!")

if ((primerNumero == segundoNumero && primerNumero == tercerNumero)) {
    document.write("felicidades eres el ganador de 500 pesos")   
} else {
    if ((primerNumero == segundoNumero) || (primerNumero == tercerNumero) || (segundoNumero == tercerNumero)) {
        document.write("felicidades has recibido el 2do premio de 250 pesos")
        
    } else {
        document.write("lo sentimos solo ganaste"+ TERCER_PREMIO)
            
            
        }
        
    }