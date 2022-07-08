// ts compiler: tsc app.ts -w
const userName = "hamdi"
 
// tell type script in all project runnin is one 

// console.log("my name is : ", userName)



// to not compile modules with type script
// 1=> add exclude :["node_modules"] exp


// tsConfig{} configuration


// "lib": [],

const buttton = document.querySelector("button")!
// console.log(buttton)

buttton.addEventListener("click", () => {
    console.log("click")
})
