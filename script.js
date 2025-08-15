const botaoPalavras = document.querySelector('#botao-palavrachave');

botaoPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const text = document.querySelector('#entrada-de-texto').value;
    const resultado = document.querySelector('#resultado-palavrachave');
    const keyword = processaTexto(text);

    resultado.textContent = keyword.join(", ");
}

function processaTexto(text) {
    let palavras = text.split(/\P{L}+/u);
    return palavras;
}