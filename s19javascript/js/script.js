/*const createUserObject = (event) => {

var idInput = document.getElementsByTagName("input");
var userObject = {}


for(let i=0; i<idInput.length; i++){
    let objectKey=idInput[i].dataset.pointsTo
    let objectValue=idInput[i].value
    userObject[objectKey]=objectValue

}
console.log(userObject)

}
var submitBtn=document.getElementById('submit-button')
submitBtn.addEventListener("click", createUserObject)*/

var inputCollection = document.querySelectorAll('input');
console.log(inputCollection)