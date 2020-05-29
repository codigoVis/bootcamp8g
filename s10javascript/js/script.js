
var name=window.prompt("Escribe tu nombre completo");
console.log(name);
document.getElementById("name").innerHTML=name;
var nameCaracter=name.length;
console.log( " Tu nombre tiene "+nameCaracter+" caracter")
document.getElementById("caracter").innerHTML=nameCaracter;
if(nameCaracter > 3){
     console.log("Tu nombre es muy lago");
     document.getElementById("tamaño").innerHTML="Tu nombre es muy lago "
}else{
    console.log("Tu nombre es muy corto")
    document.getElementById("tamaño").innerHTML="Tu nombre es muy corto"
}

 var  street=prompt("Calle");
 document.getElementById("street").innerHTML =street;
 console.log(street);

 var  number=prompt("Numero");
 document.getElementById("number").innerHTML =number;
 console.log(number);

 var  colonia=prompt("Colonia");
 document.getElementById("colonia").innerHTML =colonia;
 console.log(colonia);

 var  alcaldia=prompt("Alcaldia");
 document.getElementById("alcaldia").innerHTML =alcaldia;
 console.log(alcaldia);

 var  state=prompt("Estado");
 document.getElementById("state").innerHTML =state;
 console.log(state);

 var adress = street.concat(" , ",number," , ",colonia," , ",alcaldia," , ",state);
 console.log(adress);
 document.getElementById("adress").innerHTML=adress;


 var frase=prompt("Escriba una frase");
 var Caracterfrase=prompt("Escriba un caracter");

var string = "vicente jb"
var array=[];
for (var value of string){
     console.log(letra)
}