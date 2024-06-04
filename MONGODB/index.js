const mongoose = require('mongoose');

main()
 .then(() =>{
    console.log("Connection sucessful");
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  age:Number
});

const User = mongoose.model("User",userSchema);

User.find().then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})
// User.insertMany([
//   {name:"Tony",email:"tony@gamil.com",age:50},
//   {name:"peter",email:"peter@gamil.com",age:30},
//   {name:"brue",email:"brue@gamil.com",age:47}
// ]).then((res)=>{
//   console.log(res);
// });

// const user2 = new User({name:"eve",email:"Archi.tiwari.@gmail.com"});

// user2
//     .save()
//     .then((res)=>{
//          console.log(res);
//     })
//     .catch((err)=>{
//       console.log(err);
//     });
