const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then((res)=>{
    console.log("connection sucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allchats = [
    { from: "neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at: new Date()
},
{ from: "rohit",
    to:"mohit",
    msg:"teach me Js ",
    created_at: new Date()
},
{ from: "amit",
    to:"sumit",
    msg:"all the best",
    created_at: new Date()
},
{ from: "Ayush",
    to:"Archi",
    msg:"I love you 3000",
    created_at: new Date()
},
{ from: "neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at: new Date()
},
];

Chat.insertMany(allchats);