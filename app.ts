const person: {
    name:string, //  string
    age: number, //  number
    hobbies: string[],// array of string
    role:[number,string] //turple type
} = {
    name: "hamdi", //  string
    age: 30, //  number
    hobbies: ["sports", "Cooking"],// array of string
    role:[2,"author"]
}


person.role.push("admin")
// person.role[1]=1

// error person type

let favoriteActivites: string[];// array of strings
// errors =>  favoriteActivites = "sports" ||  ["sports",1]

favoriteActivites = ["sports"]

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
