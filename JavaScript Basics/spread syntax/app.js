const model = ["shaun", "mario", "peach"]
const blog = { title: "new blog", author: "bowser" }

console.log(model);

// ... is spread syntax it will print these 3 strings
//  back to back
console.log(...model);

// it will create a new object based on blog object
// with id:1 as new key value pair added in the end

const idBlog = { ...blog, id: 1 };
console.log(idBlog)