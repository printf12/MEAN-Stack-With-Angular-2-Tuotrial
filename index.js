const express = require('express');
const app = express();
const config = require('./config/database');
const path = require('path');

 const mongoose = require('mongoose');
 mongoose.Promise = global.Promise;
 mongoose.connect(config.uri, (err) => {
 	if (err) {

 		console.log('could not conect' + err);
 	}else{

 		console.log('connected to database ' + config.db);
 	}
 });
 
const port = 8080;

app.use(express.static(__dirname + '/client/dist'));

app.get('*' , (req,res) => {
	res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(port, () => {

	console.log('server works on port ' + port);

});