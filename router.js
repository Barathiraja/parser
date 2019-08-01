

const ParseController  = require("./controllers/ParseController");
const Config = require ("./config/config.dev.json");
const url = require("url");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();


module.exports = (app) => {
  for (key in Config) {
      console.log(Config[key]+"/parser/parse");
    app.post (Config[key] +"/parser/parse", jsonParser, (req, res, next)=>{
       
        const pathname = url.parse(req.url).pathname;
         req.header.isv1 = pathname.indexOf(Config.path1) > -1;
         console.log(req.header.isv1);
         next();
    }, ParseController.ParseClientData) 
  }
}
