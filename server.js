require("dotenv").config();  //load all the env varialbes on the serve
const express  = require("express"),
      app      = express()
      mongoose = require("mongoose");
      
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
// app.use("/stylesheet", express.static("stylesheet"));


// mongoose.connect(process.env.DATABASE_URL);
// const db = mongoose.connection;
// db.on("error", (error)=>{ console.error(error);});
// db.once("open", ()=>{console.log("Connect to the Database");});

// app.use(express.json());
const movieRouter = require("./routes/movies");
app.use("/", movieRouter);



      
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server ON!!!" );
})