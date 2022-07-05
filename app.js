var person = {
    name: "hamdi",
    age: 30,
    hobbies: ["sports", "Cooking"],
    role: [2, "author"]
};
person.role.push("admin");
// person.role[1]=1
// error person type
var favoriteActivites; // array of strings
// errors =>  favoriteActivites = "sports" ||  ["sports",1]
favoriteActivites = ["sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
