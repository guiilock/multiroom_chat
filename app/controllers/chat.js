module.exports.iniciaChat = function(application, req, res){


	var dadosForm = req.body;
	
	req.assert('apelido','O apelido precisa ser preenchido').notEmpty();
	req.assert('apelido','O apelido deve conter entre 4 e 15 caracteres').len(4, 15);

	var erros = req.validationErrors();
	if(erros){
		res.render('index', {validacao: erros});
		return;
	}

	res.render("chat", {dadosForm: dadosForm});
	application.get('io').emit('msgParaCliente',{apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'})
	application.get('io').emit('participantes', {apelido: dadosForm.apelido});

	//res.render("chat", {dadosForm: dadosForm});
}