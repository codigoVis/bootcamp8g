
 var mentors=[
    {
        name:"David",
        age:23,
        skills:[
            {
                javascript:10,
                css:8.5,
                jquery:9,
                node:9
            }
        ]
    },{
        name:"Charles",
        age:24,
        skills:[
            {
                javascript:10,
                css:8,
                jquery:9,
                node:10
            }
        ]
    },{
        name:"Michael",
        age:22,
        skills:[
            {
                javascript:10,
                css:8.5,
                jquery:10,
                node:8.5
            }
        ]
    },{
        name:"Israel",
        age:30,
        skills:[
            {
                javascript:9.5,
                css:10,
                jquery:9,
                node:8
            }
        ]
    }
]
 
/*
crear una funcion constructura para la clase Mentor, que reciba nombre, edad, y notas del mentor;
crear un objeto de la clase Mentor por cada entrada del array "mentors";
a cada mentor agregarle un método que me permita saber el promedio de sus skills;
*/
function Mentor(name,age,skills){
    this.name=name;
    this.age=age;
    this.skills=skills;
    this.promedio=function(){
    let { javascript,css,jquery,node}=this.skills[0]
    let conPrmomedio=(javascript+css+jquery+node) /4;
    return conPrmomedio
    }
   
 }
  
const ArrayToObject=(mentor)=>{
    let{name,age,skills}=mentor;
    return new Mentor(name,age,skills);
} 
let mentorObject=mentors.map((item)=>ArrayToObject(item))
console.log(mentorObject)

mentorObject.forEach(mentor=>{
    let{name, age}=mentor;
    console.log( `promedio de ${name} es ${mentor.promedio()}  `);
})