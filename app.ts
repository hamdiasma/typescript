const person = {
    name: "hamdi",
    age: 30,
    hobbies:["sports","Cooking"]
}
// error person type

let favoriteActivites: string[];// array of strings
// errors =>  favoriteActivites = "sports" ||  ["sports",1]

favoriteActivites = ["sports"]

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
