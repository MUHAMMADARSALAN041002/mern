const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log("connect to db");
}).catch(() => {
    console.log("not connected to db")
})