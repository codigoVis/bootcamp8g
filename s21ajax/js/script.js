
/*var uerObject={}
const savePost = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            console.log(response)
            getUserData()
        }
    };
    xhttp.open("GET", "POST", "https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json", true);
    xhttp.send(
        JSON.stringify(savePost)
    );
}

const getUserData = (event) => {
    event.preventDefault()
var inputCollection=document.querySelectorAll("input")
console.log(inputCollection)


inputCollection.forEach(item => {
   let objectKey= item.dataset.pointsTo
   let objetValue =item.value
   uerObject[objectKey]=objetValue
});
console.log(uerObject)
console.log(JSON.stringify(uerObject))
savePost(uerObject)
}


const printPost=()=>{
 const { title, content, date}=uerObject
  let =userTable=document.getElementById("user-table")
  let currentContent=userTable.innerHTML
  let tableRow= `
                <tr>
                    <td>${title}</td>
                    <td>${content}</td>
                    <td>${date}</td>
                </tr>
                `
}






var submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', savePost)*/

var userObject = {}
var counter = 0;
const getUserData = (event) => {
    event.preventDefault()
    let inputsCollection = document.querySelectorAll("input")
    /*
    userObject = {
        name:"Israel Salinas",
        address:"some address",
        phone:"55437888096"
    }
*/
    inputsCollection.forEach(item => {
        /*Creamos una llave para nuestro objeto*/
        let objectKey = item.dataset.pointsTo
        /*Creamos un valor para nuestro objeto*/
        let objectValue = item.value
        /*insertamos la llave y el valor dentro de nuestro objeto*/
        userObject[objectKey] = objectValue
    })
    console.log(userObject)
    console.log(JSON.stringify(userObject))
    saveKoder(userObject)
}
const printUserData = (userObject) => {
    const { name, mail, age } = userObject
    let dataRow = document.createElement('tr');
    let idTd = document.createElement('td')
    let nameTd = document.createElement('td')
    let mailTd = document.createElement('td')
    let ageTd = document.createElement('td')
    let idTextNode = document.createTextNode(++counter)
    idTd.appendChild(idTextNode)
    let nameTextNode = document.createTextNode(name)
    nameTd.appendChild(nameTextNode)
    let ageTextNode = document.createTextNode(age)
    ageTd.appendChild(ageTextNode)
    let mailTextNode = document.createTextNode(mail)
    mailTd.appendChild(mailTextNode)
    dataRow.appendChild(idTd)
    dataRow.appendChild(nameTd)
    dataRow.appendChild(mailTd)
    dataRow.appendChild(ageTd)
    let usersTable = document.getElementById("users-table")
    usersTable.appendChild(dataRow)
}
const deleteLastChild = (event) => {
    event.preventDefault()
    let usersTable = document.getElementsByTagName("tbody")[0]
    console.log(usersTable)
    usersTable.hasChildNodes() ? (usersTable.lastChild.remove(), --counter) : null;
}
var submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', getUserData)
var deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click', deleteLastChild)
/*AJAX*/
const printResponse = ( data ) => {
    console.log( data )
}
const getKodersData = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            console.log(response)
            for( let koder in response){
                console.log(koder)
                console.log(response[koder])
                let koderName = response[koder].name[0]
                console.log(koderName)
                koderName == "R" ? printUserData(response[koder]) : null
            }
            //printResponse( response )
        }
    };
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json", true);
    xhttp.send();
}
const saveKoder = (koderData) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            console.log(response)
        }
    };
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json", true);
    xhttp.send(
        JSON.stringify(koderData)
    );
}
const updateKoder = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            console.log(response)
        }
    };
    xhttp.open("PUT", "https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json", true);
    xhttp.send(
        JSON.stringify(
            {
                name:"Israel",
                email:'israel@kodemia.mx',
                age:20
            }
        )
    );
}
const patchKoder = (newObject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            console.log(response)
        }
    };
    xhttp.open("PATCH", "https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json", true);
    xhttp.send(
        JSON.stringify(
            newObject
        )
    );
}
const deleteKoder = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            console.log(response)
        }
    };
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json`, true);
    xhttp.send();
}