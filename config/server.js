//importação do framework express
var express = require('express');

// importar o módulo consign
var consign = require('consign');

// importar body parser
var bodyParser = require('body-parser');

// importar modulo express validator
var expressValidator = require('express-validator');

//iniciar o express
var app = express();

// configurar o EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Middlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());


//autoload
consign()
	.include('app/routes')
	.include('app/models')
	.include('app/controllers')
	.into(app);



//exportar o objeto app
module.exports = app;