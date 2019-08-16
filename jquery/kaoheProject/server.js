var app = require("express")();
var mysql = require("mysql");
var qs= require("querystring");
var url=require("url");
var ejs = require("ejs");

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'huaban'
});

con.connect();

// app.get("/index",function(req,res){

// 	ejs.renderFile(__dirname+"/views/index.ejs",function(err,data){
		
// 		var tmp = data.toString();

// 		res.send(tmp);
// 	});
	
// 	// res.send(html);
// });



app.get("/showImg",function(req,res){
	
	var page = url.parse(req.url,true).query["page"];

	page = page*7;

	var sql = `select * from images limit ${page},7`;

	con.query(sql,function(err,result){
		if(err) throw err;
		res.json(result);
		// console.log(result);
	})
});


// con.query("select * from images",function(err,result){
// 	if(err) console.log(err);
// 	for(var i=0;i<result.length;i++)
// 	{
// 		console.log(result[i].url);
// 	}
// });

app.listen(3000,function(){
	console.log("server start on 3000");
});