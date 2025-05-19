const perguntas = document.querySelectorAll('.faq-item .pergunta'); 
// Seleciona todos os elementos com a classe "pergunta" que estão dentro de um ".faq-item"
// Isso retorna uma NodeList com todos os títulos clicáveis da FAQ

perguntas.forEach((q) => { 
    // Itera sobre cada pergunta encontrada
    q.addEventListener('click', () => {
        // Adiciona um ouvinte de evento de clique a cada pergunta

        const resposta = q.nextElementSibling;
        // Pega o próximo elemento irmão (a div com a resposta)

        resposta.classList.toggle('escondido');
        // Alterna a classe 'escondido' para mostrar ou esconder a resposta

        q.classList.toggle('ativo');
        // Alterna a classe 'ativo' na pergunta para mudar o ícone via CSS (::after)

    });
});
