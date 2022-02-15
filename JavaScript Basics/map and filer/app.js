const model = [
    { name: "shaun", belt: "black" },
    { name: "mario", belt: "orange" },
    { name: "youshi", belt: "black" },
    { name: "luigi", belt: "green" }
]


// filter method: modify original array
const blackBelts = model.filter((item) => {
    return item.belt === "black"
})

console.log(blackBelts);
console.log(model);

// map method: gives a new array

const names = model.map((item) => {
    return item.name
})

console.log(names, model)