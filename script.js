// Seleciona todos os botões que avançam a história
const botoes = document.querySelectorAll('.btn-proximo');

// Função que troca a etapa (passo) da história
function mudarPasso(passoAtual, idProximo) {
    passoAtual.classList.remove('ativo');

    const proximo = document.getElementById(`passo-${idProximo}`);
    if (proximo) {
        proximo.classList.add('ativo');
    } else {
        console.warn(`⚠️ O passo "${idProximo}" não foi encontrado.`);
    }
}

// Adiciona os eventos de clique para todos os botões
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const passoAtual = document.querySelector('.passo.ativo');
        const idProximo = botao.dataset.proximo;

        mudarPasso(passoAtual, idProximo);
    });
});
