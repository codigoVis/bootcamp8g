const askForAword =()=>{
    let word=prompt("Ingrese una palabra")
    var howManyWords=countWords(word)
    howManyWords? null :alert("Ingrese solo una palabra")
    var noNumber=countNumber(word)
    noNumber?null: alert("ingrese solo letras")
    var palindrome=isPalindrome(word)
    palindrome? alert("La palabra Si es un palindromo"): alert("La palabra no es un palindromo")
}
const countWords =(string) =>{
    let removeSpaceWords=string.trim('');
    let remove=removeSpaceWords.replace(',','');
    let stringText=remove.split(' ');
    let countString=stringText.length;
    if(countString > 1){
        return false;
    }else{
        return true;
    }
} 
    const countNumber=(number)=>{
    let nonenumbers=number.split(" ");
   for(i=0; i<nonenumbers.length; i++){
       let character=nonenumbers[i]
       let isNumber=isNaN(character)
       if(isNumber===true){
           return true;
       }else{
           return false;
       }
       
   }

}    

const isPalindrome=(palindromeWord) =>{
    let spacePalindrome=palindromeWord.split("");
    let investWord=spacePalindrome.reverse();
    let gatherWord=investWord.join("");
     if(palindromeWord===gatherWord){
         return true;
     }else{
         return false;
     }
}







const count_input = string => string.trim().replace(',',' ').split(' ').length;
const get_number = () => {
    let number = prompt("Ingresa un numero")
    if(count_input(number) > 1){
   return 'solo ingresar un numero'
    }
    if(filter_number(number)){
        return 'Favor de ingresar solo números'
    }
    let arrayPrimeNumbers= get_prime_number_array(parseInt(number))
    let primeFactor = get_prime_factor(number,arrayPrimeNumbers);
    if(primeFactor){
        return `Los factores primo de ${number} son: ${primeFactor}`;
    }else{
        return `No pudimo obtener el factor primo de ${number}`
    } 
}
 const filter_number = number => {
    if(number.match(/\D/)){
        return true;
    }
    return false;
 }
 const get_prime_number_array = number => {
    let arrayNumber =[]
    for( let i = 2; i <= number; i++){
        if(is_prime_number(i)){
            arrayNumber.push(i);
        }
    }    
    return arrayNumber;
}
 const is_prime_number = number => {
    if(number === 0 || number === 1){
        return false
    } else {
        for( let i = 2; i < number; i++){
            if(number % i === 0){
                return false
            }  
        }
    }
    return true
}
const get_prime_factor = (number,arrayPrimeNumbers) => {
    let primeFactorArr = [],
        flag = true
    while(flag == true){
        let firstNumber = get_first_number (arrayPrimeNumbers)
        if(number % firstNumber === 0){
            primeFactorArr.push(firstNumber);
            number /= firstNumber;
        }else{
            arrayPrimeNumbers.shift();
        }
        flag = arrayPrimeNumbers.length === 0 ? false : true;
    }
    return primeFactorArr.join(',');
}
const get_first_number = numberArr => numberArr[0]
console.log(get_number());

