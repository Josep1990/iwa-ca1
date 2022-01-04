require("dotenv").config();  //load all the env varialbes on the serve
const express = require("express"),
      app     = express(),
      mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL);
// const db = mongoose.connection;
// db.on("error", (error)=>{ console.error(error);});
// db.once("open", ()=>{console.log("Connect to the Database");});

// app.use(express.json());
// const subscribersRouter = require("./routes/subscribers");
// app.use("/subscribers", subscribersRouter);



      
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server ON!!!");
})