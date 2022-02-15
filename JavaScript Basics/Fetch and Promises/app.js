// fetching the data from the url or the api
//  will take time and due to this our webpage might
// load slowly so we have to wait for the data to
// arrive

// const todo = fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
//     res.json();
// }).then((data) => {
//     console.log(data)
// })
// this todo will return a promise instead of the actual data
// it gives you a placeholder value which will be fullfilled in time
// untill it gets the data so we have to wait to promise to be fullfilled
// whenever the promise is fullfilled than then() function will run
// .json() will take the response and convert it into the javascript object
// res.json() will return a promise therefore we need another then()
// console.log(todo)

// using async and await
const gettodo = async () => {
    // await will wait till the promise is resolved
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json();
    console.log(data)
}

gettodo();
