// We are importing the values here

import { greet } from "./model.js"
// importing deafult value here it will work
// even if you call it with a diff name since 
// it's a default value
import abc from "./model.js"

console.log(abc);

greet();