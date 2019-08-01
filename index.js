const express = require("express") ;
const router = require("./router");
const app = new express();
router(app);
app.listen(3000);
console.log("app is Listening on port 3000");

