// const ADMIN =0
// const READ_ONLY =1
// const AUTHOR =2

// how to use enum into role


enum Role{
    ADMIN,READ_ONLY,AUTHOR
} 

const person = {
    name: "hamdi", //  string
    age: 30, //  number
    hobbies: ["sports", "Cooking"],// array of string
    role:Role.ADMIN
}


// person.role.push("admin")
// person.role[1]=1

// error person type

let favoriteActivites: string[];// array of strings
// errors =>  favoriteActivites = "sports" ||  ["sports",1]

favoriteActivites = ["sports"]

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
    console.log("admin")
}
