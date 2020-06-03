

const  starOparation = () => { 
    var selectedOperation= prompt("Ingresa una opcion  1:Cuadrado 2:Rectangulo 3:Circulo 4:Triangulo ");
        getUserOperation(selectedOperation);
    }
    
    const getUserOperation = (selectedOperation) => {
        switch( selectedOperation ) {
            case "1":
            var optioneOne=parseInt(prompt("tu eleccion fue un cuadrado  elije una opcion 1:Area  2:Perimetro"))
                if ( optioneOne=== 1){
                    var numberOne=parseInt(prompt("Ingrese el primer dato"))
                    var area= numberOne * numberOne
                    alert("El area del cuadrado es de "+area)
                    console.log("El area del cuadrado es de "+area)
                }else if(optioneOne===2){
                    var numberTwo=parseInt(prompt("Ingrese el primer dato para hacer el perimetro"))
                    var perimetro= numberTwo * 4
                    alert("El perimetro  del cuadrado es de "+perimetro)
                    console.log("El perimetro  del cuadrado es de "+perimetro)
                }
                break;
            case "2":
                var optioneTwo=parseInt(prompt("tu eleccion fue un rectangulo  elije una opcion 1:Area  2:Perimetro"))
                if ( optioneTwo===1){
                    var numberOne=parseInt(prompt("Ingrese el primer dato"))
                    var numberTwo=parseInt(prompt("Ingrese elsegundo dato"))
                    var area= numberOne * numberTwo
                    alert("El area del rectangulo  es de "+area)
                    console.log("El area del rectangulo  es de "+area)
                }else if(optioneTwo===2){
                    var numberOne=parseInt(prompt("Ingrese el primer dato"))
                    var numberTwo=parseInt(prompt("Ingrese elsegundo dato"))
                    var perimetro= numberOne + numberOne +numberTwo + numberTwo
                    alert("El perimetro del rectangulo  es de "+perimetro)
                    console.log("El perimetro del rectangulo  es de "+perimetro)
                }
                break;
                case "3":
                    var optioneThree=parseInt(prompt("tu eleccion fue un circulo  elije una opcion 1:Area  2:Perimetro"))
                    if ( optioneThree===1){
                        var radio=parseFloat(prompt("Ingrese el radio del circulo"))
                        var pi=Math.PI;
                        var area = pi* Math.pow(radio,2);
                        alert("El area del circulo  es de "+area)
                        console.log("El area del circulo  es de "+area)
    
                    }else if(optioneThree===2){
                        var radio=parseFloat(prompt("Ingrese el radio del circulo perimetro"))
                        var pi=Math.PI;
                        var perimetro =Math.pow(pi,2)*radio;
                        alert("El area del circulo  es de "+perimetro)
                        console.log("El area del circulo  es de "+perimetro)
                    }
                    break;
                case "4":
                    var optioneFor=parseInt(prompt("tu eleccion fue un circulo  elije una opcion 1:Area  2:Perimetro"))
                    if ( optioneFor===1){
                        var  numberOne=parseFloat(prompt("Ingrese el primer datoo"))
                        var  numberTwo=parseFloat(prompt("Ingrese el segundo dato"))
                        var area= numberOne *numberTwo/2
                        alert("El area del triangulo  es de "+area)
                        console.log("El area del triangulo  es de "+area)
    
                    }else if(optioneFor===2){
                        var  numberOne=parseFloat(prompt("Ingrese el primer datoo"))
                        var  numberTwo=parseFloat(prompt("Ingrese el segundo dato"))
                        var  numberThree=parseFloat(prompt("Ingrese el tercer  dato"))
                        perimetro=numberOne+numberTwo+numberThree
                        alert("El perimetro del triangulo  es de "+perimetro)
                        console.log("El perimetr del triangulo  es de "+perimetro)
                    }
    
                    break;
            
        } 
    }
    