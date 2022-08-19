const formulario = document.querySelector("form");
const contatoMensagem = document.querySelector(".contato-mensagem");
const mensagemEnviada = document.querySelector(".contato .mensagem-enviada");
const mensagemErro = document.querySelector(".contato .mensagem-erro");
const botoes = document.querySelectorAll(
    ".mensagem-enviada .botao, .mensagem-erro .botao"
);

botoes.forEach((botao) => {
    function handleBotao(e) {
        if (botao.classList.contains("botao")) {
            location.reload();
        }
    }
    botao.addEventListener("click", handleBotao);
});

function formularioEnviado(resposta) {
    if (resposta.ok) {
        contatoMensagem.classList.add("ativo");
        mensagemEnviada.classList.add("ativo");
        formulario.classList.add("inativo");
    } else {
        contatoMensagem.classList.add("ativo");
        mensagemErro.classList.add("ativo");
        formulario.classList.add("inativo");
    }
}

function enviarFormulario(e) {
    e.preventDefault();
    const botao = document.querySelector("form button");

    botao.disabled = true;
    botao.innerText = "Enviando...";

    const data = new FormData(formulario);

    fetch("/enviar.php", {
        method: "POST",
        body: data,
    }).then(formularioEnviado);
}
formulario.addEventListener("submit", enviarFormulario);
