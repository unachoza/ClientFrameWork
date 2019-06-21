console.log("working?");

import { User } from "./models/User";

const user = new User({name: "sara", age: 66});

console.log(user.get('name'))
console.log(user.get('age'))
