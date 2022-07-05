var person = {
    name: "hamdi",
    age: 30,
    hobbies: ["sports", "Cooking"]
};
// error person type
var favoriteActivites; // array of strings
// errors =>  favoriteActivites = "sports" ||  ["sports",1]
favoriteActivites = ["sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
