// import and export in es6

const model = ["shaun", "youshi", "mario", "peach"]

const foramtModel = () => {
    let val = ""
    model.forEach(model => val += model + ", ")
}

const greet = () => {
    console.log(model[0] + " says hello")
}


// this is es6 feature which will allow you export 
// certain function and variable from one file to
// another.We are exporting he object here
export { foramtModel, greet }

// exporting a default value from this file instead 
// of the object and there should be only one default
// value you are exporting
export default model