if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express"); //Importing express
const app = express(); //Call express to use in app
const expressLayouts = require("express-ejs-layouts");

//Importing the router into the app
const indexRouter = require("./routes/index");

//Setting up the app
//Using the various methods and functions:
app.set("view engine", "ejs"); //Setting the view engine with ejs
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout"); //Making the layouts all similar
app.use(expressLayouts); //Using the const from line 3
app.use(express.static("public")); //Where all css,html will be located

//Importing mongoose for use:
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("There is an error connecting to MongoDB", error);
  });
//const db = mongoose.connnection;
//db.on("error", (error) => console.error(error)); //Loging out error to the console
//db.once("open", () => console.log("Connected to Mongoose")); //To show that the db is connected to the server

app.use("/", indexRouter); //Asking the app to use the router we created

app.listen(process.env.PORT || 3000); //3000 for development purposes!
