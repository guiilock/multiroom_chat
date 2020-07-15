module.exports.iniciaChat = function(application, req, res){


	var dadosForm = req.body;
	
	req.assert('apelido','O apelido precisa ser preenchido').notEmpty();
	req.assert('apelido','O apelido deve conter entre 4 e 15 caracteres').len(4, 15);

	var erros = req.validationErrors();
	if(erros){
		res.render('index', {validacao: erros});
		return;
	}
	application.get('io').emit(
		'msgParaCliente',
		{apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'}
		)

	res.render("chat", {dadosForm: dadosForm});
}