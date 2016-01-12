/**
 * index.js
 */
 var http = require('http');
 var express = require('express');
 var bodyParser = require('body-parser');
 var cookieParser = require('cookie-parser');
 var path = require('path'); 
 var session = require('express-session');
 var flash = require('connect-flash');
 var app = express();
 var views_dir = path.join( __dirname, "public/views" );

//Initialize Express
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	  extended: true
	}));
// app.use(function(req, res, next) { res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'); next(); });

var mathToolsAPI = require('./app/mathToolsAPI.js');
app.use('/math/', mathToolsAPI);
app.set('view engine', 'html');
app.set( 'views', views_dir );
app.use(flash());
app.set('port', process.env.PORT || 2000);

//start the server
app.listen(app.get('port'));
console.log("Server started on port "+app.get('port'));

app.get('/', function(req, res){
    res.sendFile( __dirname + '/public/views/index.html');
});