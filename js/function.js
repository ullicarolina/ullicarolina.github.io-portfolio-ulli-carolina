function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigada, Sr(a) ' + nome.value + '. A  sua mensagem foi encaminhada com sucesso! Te responderei o mais breve possível!');
    }

} /* definição do que será retornado ao preenchermos o formulário e clicarmos em enviar */