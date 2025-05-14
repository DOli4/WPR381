const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

////Creating an express app and choosing a port number
const app = express();
const port = 3000;

//Serve static files
app.use(express.static(path.join(__dirname, "public")));

//Enable body parsing for POST forms
app.use(express.urlencoded({ extended: true }));

//Set view engine and views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Use routes
app.use("/", pageRoutes);

//Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
