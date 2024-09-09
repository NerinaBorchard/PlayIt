const express = require("express");
//CREATE APP
const app = express();
//SERVE A STATIC PAGE IN THE PUBLIC DIRECTORY
app.use(express.static("public"));
//PORT TO LISTEN TO
app.listen(3000, () => {
console.log("Listening on localhost:3000");
});
