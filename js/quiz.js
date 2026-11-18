const perguntas = [
    {
        pergunta: "Qual é o verdadeiro nome do Homem de Ferro?",
        alternativas: [
            "Steve Rogers",
            "Tony Stark",
            "Bruce Banner",
            "Peter Parker"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a empresa de Tony Stark?",
        alternativas: [
            "Oscorp",
            "Pym Technologies",
            "Stark Industries",
            "Daily Bugle"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é a inteligência artificial criada para ajudar Tony Stark e associada à sua armadura?",
        alternativas: [
            "JARVIS",
            "Ultron",
            "Vision",
            "Friday"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a principal função do reator arc no peito de Tony?",
        alternativas: [
            "Controlar o tempo",
            "Ajudar a fornecer energia",
            "Deixá-lo invisível",
            "Controlar outros heróis"
        ],
        correta: 1
    },
    {
        pergunta: "Em qual filme do Universo Cinematográfico Marvel Tony Stark aparece pela primeira vez?",
        alternativas: [
            "Os Vingadores",
            "Homem de Ferro 2",
            "Homem de Ferro",
            "Vingadores: Era de Ultron"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do assistente de Tony Stark que aparece como inteligência artificial depois de JARVIS?",
        alternativas: [
            "Friday",
            "KAREN",
            "Edith",
            "Cortana"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a cor mais característica da armadura clássica do Homem de Ferro?",
        alternativas: [
            "Azul e prata",
            "Verde e preto",
            "Vermelho e dourado",
            "Branco e roxo"
        ],
        correta: 2
    },
    {
        pergunta: "Quem interpreta Tony Stark nos filmes do Universo Cinematográfico Marvel?",
        alternativas: [
            "Chris Evans",
            "Robert Downey Jr.",
            "Chris Hemsworth",
            "Mark Ruffalo"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do vilão que usa as Joias do Infinito e enfrenta os Vingadores?",
        alternativas: [
            "Loki",
            "Mandarim",
            "Thanos",
            "Ultron"
        ],
        correta: 2
    },
    {
        pergunta: "Qual frase ficou famosa no final de Homem de Ferro (2008), quando Tony revela sua identidade?",
        alternativas: [
            "Eu sou inevitável",
            "Eu sou o Homem de Ferro",
            "Vingadores, avante!",
            "Eu posso fazer isso o dia todo"
        ],
        correta: 1
    }
];

// ELEMENTOS DO HTML
const numeroPergunta = document.getElementById("numeroPergunta");
const pontuacao = document.getElementById("pontuacao");
const progresso = document.getElementById("progresso");
const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const feedback = document.getElementById("feedback");
const botaoConfirmar = document.getElementById("botaoConfirmar");
const areaQuiz = document.getElementById("areaQuiz");
const resultado = document.getElementById("resultado");
const mensagemFinal = document.getElementById("mensagemFinal");
const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const botaoReiniciar = document.getElementById("botaoReiniciar");

// VARIÁVEIS DO JOGO
let indicePergunta = 0;
let pontos = 0;
let respostaSelecionada = null;
let respostaConfirmada = false;

// MOSTRA A PERGUNTA ATUAL
function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePergunta];

    numeroPergunta.textContent = `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;
    pontuacao.textContent = `Pontos: ${pontos}`;
    progresso.style.width = `${(indicePergunta / perguntas.length) * 100}%`;
    pergunta.textContent = perguntaAtual.pergunta;

    alternativas.innerHTML = "";
    feedback.textContent = "";
    feedback.style.color = "#ffffff";

    respostaSelecionada = null;
    respostaConfirmada = false;

    botaoConfirmar.disabled = true;
    botaoConfirmar.textContent = "Confirmar resposta";

    // CRIA OS BOTÕES DAS ALTERNATIVAS
    perguntaAtual.alternativas.forEach((texto, indice) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.classList.add("alternativa");
        botao.textContent = texto;

        botao.addEventListener("click", function() {
            selecionarResposta(indice, botao);
        });

        alternativas.appendChild(botao);
    });
}

// SELECIONA UMA ALTERNATIVA
function selecionarResposta(indice, botaoClicado) {
    if (respostaConfirmada) {
        return;
    }

    respostaSelecionada = indice;

    const botoes = alternativas.querySelectorAll(".alternativa");
    botoes.forEach(botao => {
        botao.classList.remove("selecionada");
    });

    botaoClicado.classList.add("selecionada");
    botaoConfirmar.disabled = false;
}

// CONFIRMA A RESPOSTA
function confirmarResposta() {
    if (respostaSelecionada === null || respostaConfirmada) {
        return;
    }

    respostaConfirmada = true;

    const perguntaAtual = perguntas[indicePergunta];
    const acertou = respostaSelecionada === perguntaAtual.correta;
    const botoes = alternativas.querySelectorAll(".alternativa");

    if (acertou) {
        pontos++;
        feedback.textContent = "Resposta correta! Muito bem!";
        feedback.style.color = "#55d98b";
    } else {
        feedback.textContent = `Resposta incorreta! A resposta certa é: ${perguntaAtual.alternativas[perguntaAtual.correta]}.`;
        feedback.style.color = "#ff7373";
    }

    // DESTACA A RESPOSTA CERTA
    botoes.forEach((botao, indice) => {
        botao.disabled = true;

        if (indice === perguntaAtual.correta) {
            botao.classList.add("correta");
        } else if (indice === respostaSelecionada) {
            botao.classList.add("incorreta");
        }
    });

    pontuacao.textContent = `Pontos: ${pontos}`;

    botaoConfirmar.textContent =
        indicePergunta === perguntas.length - 1
            ? "Ver resultado"
            : "Próxima pergunta";

    botaoConfirmar.disabled = false;
}

// AVANÇA PARA A PRÓXIMA PERGUNTA
function avancarPergunta() {
    indicePergunta++;

    if (indicePergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// MOSTRA O RESULTADO FINAL (Versão única e unificada)
function mostrarResultado() {
    areaQuiz.hidden = true;
    resultado.hidden = false;

    progresso.style.width = "100%";

    pontuacaoFinal.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas!`;

    localStorage.setItem('starkQuizPontuacao', pontos);
    localStorage.setItem('starkQuizData', new Date().toLocaleString());

    salvarEExibirHistorico(pontos, perguntas.length);

    if (pontos === perguntas.length) {
        mensagemFinal.textContent = "Perfeito! Você é um verdadeiro gênio da Stark Industries!";
    } else if (pontos >= 7) {
        mensagemFinal.textContent = "Excelente! Você conhece muito bem o Homem de Ferro!";
    } else if (pontos >= 4) {
        mensagemFinal.textContent = "Bom trabalho! Continue treinando suas habilidades.";
    } else {
        mensagemFinal.textContent = "Ainda dá para melhorar! Revise a história de Tony Stark e tente novamente.";
    }
}

function reiniciarQuiz() {
    indicePergunta = 0;
    pontos = 0;

    resultado.hidden = true;
    areaQuiz.hidden = false;

    mostrarPergunta();
}

function salvarEExibirHistorico(pontosTotal, totalPerguntas) {
    let historico = JSON.parse(localStorage.getItem('starkQuizHistorico')) || [];
    
    const novaPartida = {
        pontos: pontosTotal,
        total: totalPerguntas,
        data: new Date().toLocaleString()
    };
    
    historico.unshift(novaPartida);
    if (historico.length > 3) historico.pop();
    
    localStorage.setItem('starkQuizHistorico', JSON.stringify(historico));
    exibirHistorico();
}

function exibirHistorico() {
    const containerHistorico = document.getElementById('listaHistorico');
    if (!containerHistorico) return;

    let historico = JSON.parse(localStorage.getItem('starkQuizHistorico')) || [];
    
    if (historico.length === 0) {
        containerHistorico.innerHTML = '<span class="data-partida">Nenhum registro anterior encontrado.</span>';
        return;
    }

    containerHistorico.innerHTML = '';
    historico.forEach((partida, index) => {
        containerHistorico.innerHTML += `
            <div class="partida-historico">
                <strong>Tentativa 0${index + 1}</strong>
                <span>Acertos: ${partida.pontos} de ${partida.total} questões</span>
                <div class="data-partida">Registrado em: ${partida.data}</div>
            </div>
        `;
    });
}

botaoConfirmar.addEventListener("click", function() {
    if (!respostaConfirmada) {
        confirmarResposta();
    } else {
        avancarPergunta();
    }
});

botaoReiniciar.addEventListener("click", reiniciarQuiz);

document.addEventListener('DOMContentLoaded', () => {
    exibirHistorico();
    mostrarPergunta();
});