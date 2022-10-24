//Pre Entrega 1 - CATALANO, Esteban Ezequiel
let nombre = prompt(" Ingrese su nombre y apellido para comenzar con su/s compra/s: ")
console.log("bienvenido/a:"+ nombre + "a Veterinaria El Quirquincho")
        

let Alimento = Number(prompt("Elija un producto 1-Alimento-Basico 2-Balanceado 3-Plus 4-Ultra 5-Premium 6-Exclusivo" ))
let cantidad = Number(prompt("Elija la Cantidad de Kilogramos"))
let total =0
let ValorKilosAlimentos=0
if(Alimento==1){
    ValorKilosAlimentos=+200
  console.log("Alimento-Basico 1:$" + ValorKilosAlimentos)
  console.log("cantidad de kilos: "+ cantidad)
  console.log("total: $" + ValorKilosAlimentos * cantidad )
  total=ValorKilosAlimentos*cantidad
  
    }else if(Alimento==2){
        ValorKilosAlimentos= ValorKilosAlimentos+500
        console.log("Alimento Balanceado 2:$" + ValorKilosAlimentos)
        console.log("cantidad de kilos: "+ cantidad)
        console.log("total: $" + ValorKilosAlimentos * cantidad )
        total=ValorKilosAlimentos*cantidad
   
    }else if(Alimento==3){
        ValorKilosAlimentos=ValorKilosAlimentos+700
        console.log("Alimento Plus 3:$" + ValorKilosAlimentos)
        console.log("cantidad de kilos: "+ cantidad)
        console.log("total: $" + ValorKilosAlimentos * cantidad )
        total=ValorKilosAlimentos*cantidad
   
    }else if(Alimento==4){
        ValorKilosAlimentos=ValorKilosAlimentos+900
        console.log("Alimento Ultra 4:$" + ValorKilosAlimentos)
        console.log("cantidad de kilos: "+ cantidad)
        console.log("total: $" + ValorKilosAlimentos * cantidad )
        total=ValorKilosAlimentos*cantidad
    
    }else if(Alimento==5){
         ValorKilosAlimentos=ValorKilosAlimentos+1100
         console.log("Alimento Premium 5:$" + ValorKilosAlimentos)
         console.log("cantidad de kilos: "+ cantidad)
         console.log("total: $" + ValorKilosAlimentos * cantidad )
         total=ValorKilosAlimentos*cantidad
     
    }else if(Alimento==6){
           ValorKilosAlimentos=ValorKilosAlimentos+1300
           console.log("Alimento Exclusivo 6:$" + ValorKilosAlimentos)
           console.log("cantidad de kilos: "+ cantidad)
           console.log("total: $" + ValorKilosAlimentos * cantidad )
           total=ValorKilosAlimentos*cantidad
    }else{alert("opcion invalida")}
                          
let otrosTotales=0
let ValorKilosAlimentos2=0
let total2=0
let contador=prompt("quiere agregar mas productos? 1-si 2-no")
if(contador==2){
    cobrar()
    }

    while (contador==1) {
    let productos2 = Number(prompt("elija un producto 1-Alimento-Basico 2-Balanceado 3-Plus 4-Ultra 5-Premium 6-Exclusivo" ))
    let cantidad2 = Number(prompt("elija la cantidad de kilos que quiera agregar"))
   switch(productos2){
            case 1:                      
                ValorKilosAlimentos2=+200
        console.log("Alimento 1 :"+ ValorKilosAlimentos2);
        console.log("cantidad de kilos: "+ cantidad)
        console.log("total :$"+ ValorKilosAlimentos2*cantidad2);
       total2=total2+ValorKilosAlimentos2*cantidad2
            break;
            case 2:
                ValorKilosAlimentos2=+500
        console.log("Alimento 2 :$"+ ValorKilosAlimentos2);
        console.log("cantidad de kilos: "+ cantidad)
        console.log("total :$"+ ValorKilosAlimentos2*cantidad2)
        total2=total2+ValorKilosAlimentos2*cantidad2
            break;
            case 3:        
            ValorKilosAlimentos2=+700
        console.log("Alimento 3 :$"+ ValorKilosAlimentos2);
        console.log("cantidad de kilos: "+ cantidad)
        console.log("total :$"+ ValorKilosAlimentos2*cantidad2)
         total2=total2+ValorKilosAlimentos2*cantidad2
            break;
            case 4:
                ValorKilosAlimentos2=+900
        console.log("Alimento 4 :$"+ ValorKilosAlimentos2);
        console.log("cantidad de kilos: "+ cantidad)
        console.log("total :$"+ ValorKilosAlimentos2*cantidad2)
        total2=total2+ValorKilosAlimentos2*cantidad2
            break;
            case 5:
                ValorKilosAlimentos2=+1100
         console.log("Alimento  5:$"+ValorKilosAlimentos2);
         console.log("cantidad de kilos: "+ cantidad)
         console.log("total :$"+ ValorKilosAlimentos2*cantidad2)
                  total2=total2+ValorKilosAlimentos2*cantidad2
            break;
            case 6:
                ValorKilosAlimentos2=+1300
         console.log("Alimento 6:$"+ ValorKilosAlimentos2);
         console.log("cantidad de kilos: "+ cantidad)
        console.log("total :$"+ ValorKilosAlimentos2*cantidad2)
                total2=total2+ValorKilosAlimentos2*cantidad2
            break;
            default:
                console.log("opcion invalida")  
         }
         contador++
         contador=prompt("quiere agregar mas productos? 1-si 2-no")
         if(contador==2){
            cobrar()
         }else{
            alert("opcion invlida")
         }
              
        }
        
function cobrar (){
    let datosTarjeta=0
        let KilogramosCuota=0
        let totalTotal=total+total2
        let cuotas=0
 console.log("total de la compra: $"+(total+total2))
let pago= prompt("Indique el metodo de pago? tarjeta o transferencia")
if(pago=="tarjeta"){
    let debOcred=prompt("debito o credito?")
    if(debOcred== "credito"){
         cuotas = Number(prompt("Indique cantidad de cuotas? 3, 6 o 12"))
        if(cuotas==3) {

          KilogramosCuota= totalTotal/cuotas
         console.log("3 cuotas sin intereses de: $"+ KilogramosCuota)

        }else if(cuotas==6){
                 KilogramosCuota= totalTotal/cuotas
         console.log("6 cuotas sin intereses de: $"+ KilogramosCuota)

        }else if(cuotas ==12){
                 KilogramosCuota= totalTotal/cuotas
         console.log("12 cuotas sin intereses de: $"+ KilogramosCuota)

        }else{
            alert("opcion invalida, vuelva a comenzar la compra")
        }
    }else if(debOcred=="debito"){
         datosTarjeta=Number(prompt("ingrese los 12 digitos de su tarjeta"))
         if(datosTarjeta>=7777777777 && datosTarjeta<=012345678910){
            alert("tarjeta aprobada")
         }else{
            alert("opcion invalida, vuelva a comenzar la compra")
         }
    }else {
        alert("opcion invalida")
    }
}else if(pago=="transferencia"){
    alert("CBU NRO. 123123456646777 a nombre de El Patron de los Animales")
    console.log("Trasnferir al CBU NRO. 123123456646777")
    }else{
        alert("opcion incorrecta")
        
    }
}