function initMostrarMensagem() {
    const formulario = document.querySelector(".js form");
    const contatoMensagem = document.querySelector(".js .js-contato-mensagem");
    const mensagemEnviada = document.querySelector(".js .mensagem-enviada");
    const mensagemErro = document.querySelector(".js .mensagem-erro");
    const botoes = document.querySelectorAll(
        ".js .mensagem-enviada .botao, .js .mensagem-erro .botao"
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
            contatoMensagem.classList.add(activeClass);
            mensagemEnviada.classList.add(activeClass);
            formulario.classList.add("inativo");
        } else {
            contatoMensagem.classList.add(activeClass);
            mensagemErro.classList.add(activeClass);
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
}
initMostrarMensagem();
