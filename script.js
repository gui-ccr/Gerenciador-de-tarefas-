// --- MINHAS FERRAMENTAS ---
// Primeiro, eu preciso pegar os elementos HTML com os quais vou interagir.
// Guardo cada um em uma constante para usar depois.
const form = document.querySelector('#form-nova-tarefa');
const input = document.querySelector('#input-nova-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');



let tarefas = [];


// --- MINHAS FUNÇÕES (O QUE MEU CÓDIGO SABE FAZER) ---

/*
 * Minha função para desenhar as tarefas na tela.
 * Ela é responsável por pegar os dados do meu array 'tarefas' e criar o HTML.
 */
function renderizarTarefas() {
    // Antes de desenhar, eu sempre limpo a lista que já está na tela.
    // Faço isso para não acabar com tarefas duplicadas.
    listaTarefas.innerHTML = '';

    // Agora, para cada tarefa dentro do meu array 'tarefas', eu vou executar um código.
    // O '.forEach()' me ajuda a passar por cada item, um por um.
    tarefas.forEach((tarefa, index) => {
        // Para cada tarefa, eu crio um novo elemento de lista `<li>`.
        const itemDaTarefa = document.createElement('li');
        
        // Eu "carimbo" o `<li>` com a sua posição (índice) no array.
        // Isso é para saber qual tarefa deletar ou marcar depois.
        itemDaTarefa.dataset.index = index;

        // Eu verifico no meu objeto 'tarefa' se ela está marcada como 'concluida'.
        if (tarefa.concluida) {
            // Se estiver, eu adiciono a classe CSS que risca o texto.
            itemDaTarefa.classList.add('tarefa-concluida');
        }

        // Eu crio o elemento `<span>` que vai guardar o texto da tarefa.
        const textoSpan = document.createElement('span');
        textoSpan.textContent = tarefa.texto; // O texto vem do meu objeto 'tarefa'.
        textoSpan.classList.add('texto-tarefa');

        // Eu crio o botão de deletar para esta tarefa.
        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = 'Deletar';
        botaoDeletar.classList.add('botao-deletar');
        
        // Agora eu monto o quebra-cabeça: coloco o texto e o botão DENTRO do `<li>`.
        itemDaTarefa.appendChild(textoSpan);
        itemDaTarefa.appendChild(botaoDeletar);

        // Finalmente, eu coloco o `<li>` completo e montado na minha lista `<ul>` na página.
        listaTarefas.appendChild(itemDaTarefa);
    });
}

/*
 * Minha função para salvar o estado atual do meu array 'tarefas' no navegador.
 */
function salvarTarefas() {
    // Eu pego meu array 'tarefas', transformo ele numa string com formato JSON...
    // ...e guardo no localStorage com a chave 'tarefas'.
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

/*
 * Minha função para carregar os dados que eu salvei anteriormente.
 */
function carregarTarefas() {
    // Eu tento buscar no localStorage se existe algo salvo com a chave 'tarefas'.
    const tarefasSalvas = localStorage.getItem('tarefas');

    // Se eu encontrei alguma coisa salva...
    if (tarefasSalvas) {
        // ...eu pego essa string, converto de volta para um array de verdade...
        // ...e atualizo 
        tarefas = JSON.parse(tarefasSalvas);
    }
}


// --- MEUS EVENTOS (QUANDO AS COISAS ACONTECEM) ---

// Quando eu enviar o formulário (clicando no botão ou apertando Enter)...
form.addEventListener('submit', (event) => {
    // Eu impeço o comportamento padrão do formulário, que é recarregar a página.
    event.preventDefault();

    // Eu pego o texto que o usuário digitou e limpo os espaços em branco do início e do fim.
    const textoDaTarefa = input.value.trim();

    // Eu só continuo se o usuário realmente digitou alguma coisa.
    if (textoDaTarefa !== '') {
        // Eu crio um novo objeto para representar a nova tarefa.
        // E o adiciono no final do meu array 'tarefas'.
        tarefas.push({
            texto: textoDaTarefa,
            concluida: false // Toda nova tarefa começa como "não concluída".
        });

        // Agora que meu array mudou, eu preciso salvar e redesenhar.
        salvarTarefas();
        renderizarTarefas();

        // Para facilitar a vida do usuário, eu limpo o campo de texto...
        input.value = '';
        // ...e coloco o cursor piscando de volta nele.
        input.focus();
    }
});

// Eu coloco um único "escutador" de eventos na lista inteira (`<ul>`).
// Ele vai me avisar sempre que qualquer coisa DENTRO dela for clicada.
listaTarefas.addEventListener('click', (event) => {
    // Eu pergunto: "Qual foi o alvo exato do clique?"
    const elementoClicado = event.target;
    // E também: "Qual o `<li>` mais próximo desse alvo?"
    const itemClicado = elementoClicado.closest('li');

    // Se o clique foi fora de um `<li>` (no espaço vazio), eu não faço nada.
    if (!itemClicado) return;
    
    // Eu leio o "carimbo" (o data-index) do `<li>` para saber qual é a sua posição no array.
    const index = parseInt(itemClicado.dataset.index);

    // Se o alvo do clique tinha a classe 'botao-deletar'...
    if (elementoClicado.classList.contains('botao-deletar')) {
        // ...eu removo 1 item do meu array 'tarefas', a partir da posição 'index'.
        tarefas.splice(index, 1);
    } 
    // Senão, se o alvo tinha a classe 'texto-tarefa'...
    else if (elementoClicado.classList.contains('texto-tarefa')) {
        // ...eu vou direto no meu array, na tarefa daquele índice, e inverto
        // o valor de 'concluida' (de true para false, ou de false para true).
        tarefas[index].concluida = !tarefas[index].concluida;
    }

    // Como eu modifiquei o array (deletei ou alterei), preciso salvar e redesenhar.
    salvarTarefas();
    renderizarTarefas();
});


// --- INICIALIZAÇÃO DA PÁGINA ---

// Este é o ponto de partida!
// Assim que meu script é carregado, eu primeiro tento carregar as tarefas salvas.
carregarTarefas();
// E então, eu chamo a função para desenhar o estado inicial (seja ele vazio ou com dados).
renderizarTarefas();