//importar as configurações do servidor
var app = require('./config/server');

//parametrizar a porta de escuta
var server = app.listen(3000, function(){
	console.log('Servidor Online');
});

var io = require('socket.io').listen(server);

app.set('io', io);


//conexao web socket

io.on('connection', function(socket){
	console.log('Usuario Conectou');

	socket.on('disconnect', function(){
		console.log('Usuario desconectou');
	});

	socket.on('msgParaServidor', function(data){
		socket.emit('msgParaCliente2', {apelido: 'Eu:', mensagem: data.mensagem});
		socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
	});

});
