require("dotenv").config();  //load all the env varialbes on the serve
//all the varibles and dependencies required to run the app
const express  = require("express"), //express is a back end web application framework for Node.js
      app      = express()
      mongoose = require("mongoose"); //Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js
      
app.use(express.static(__dirname + "/public")); // tell express to use the static files under public directory in this case css
app.set("view engine", "ejs"); // EJS or Embedded Javascript Templating is a templating engine used by Node.js.

const DATABASE_URL_PROD="mongodb+srv://root:student2019222@ca2databases.hxftx.mongodb.net/CA2Databases?retryWrites=true&w=majority"
mongoose.connect(DATABASE_URL_PROD, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

const movieRouter = require("./routes/movies"); //importing the routes into the server
app.use("/", movieRouter);
      
app.listen(process.env.PORT || 3000, ()=>{ //server start on port 3000 
    console.log("Server ON!!!" );
})