// const ADMIN =0
// const READ_ONLY =1
// const AUTHOR =2
// how to use enum into role
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "hamdi",
    age: 30,
    hobbies: ["sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push("admin")
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
if (person.role === Role.AUTHOR) {
    console.log("admin");
}
