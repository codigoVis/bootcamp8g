var songsArray = [
    {
        name: "Thunderstruck",
        interpreter: "AC / DC",
        gender: "Rock"
    }, {
        name: "Fear of the dark",
        interpreter: "Iron Maiden",
        gender: "Metal"
    }, {
        name: "Whole lotta Rossie",
        interpreter: "AC / DC",
        gender: "Rock"
    }, {
        name: "Electric Eye",
        interpreter: "Judas Priest",
        gender: "Metal"
    }, {
        name: "The show must go on",
        interpreter: "Queen",
        gender: "Rock"
    }, {
        name: "Sappy",
        interpreter: "Nirvana",
        gender: "Grounge"
    }, {
        name: "Smeels like teen spirit",
        interpreter: "Nirvana",
        gender: "Grounge"
    }, {
        name: "The memory remains",
        interpreter: "Metallica",
        gender: "Trash"
    }, {
        name: "Stairway to heaven",
        interpreter: "Led Zeppelin",
        gender: "Rock"
    }, {
        name: "Leave that thing alone",
        interpreter: "Rush",
        gender: "Progressive Rock"
    }, {
        name: "Confortably numb",
        interpreter: "Pink Floyd",
        gender: "Progressive Rock"
    }
]

let newArray =songsArray.reduce((acum,item) => {
   if(!acum.includes(item.gender)){
       acum=[...acum, item.gender]
   }
     return acum
},[]);

let musicArray = newArray.map((gender)=>{
    let filter=songsArray.filter((item) =>{
        if(item.gender==gender){
            return item
        }
    })
    let gender2={
    [gender]:filter,
    };
    console.log(gender2)
})
