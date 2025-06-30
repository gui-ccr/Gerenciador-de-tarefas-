# ✅ Gerenciador de Tarefas (To-Do List)

Uma aplicação web clássica de Lista de Tarefas (To-Do List) construída do zero com HTML, CSS e JavaScript puro. Este projeto serviu como um estudo prático e aprofundado dos conceitos fundamentais de manipulação do DOM, gerenciamento de estado e persistência de dados no navegador.

### 🔗 Link para a Demonstração
### 🔗 [Clique aqui para a demonstração ao vivo](https://gui-ccr.github.io/Gerenciador-de-tarefas-/) 

---

### ✨ Funcionalidades

* **Adicionar Tarefas:** Permite que o usuário insira novas tarefas através de um campo de texto.
* **Marcar como Concluída:** Um clique no texto da tarefa a marca como concluída (ou a desmarca), aplicando um estilo visual de "riscado".
* **Deletar Tarefas:** Cada tarefa possui um botão para ser removida individualmente da lista.
* **Persistência de Dados:** As tarefas e seus status (concluída ou não) permanecem salvos mesmo após recarregar ou fechar a página, graças ao uso do `localStorage` do navegador.

### 📸 Screenshot
![Screenshot do Gerenciador de Tarefas](/image.png)
*(**Nota:** Tire um print da sua aplicação funcionando, adicione o arquivo à pasta do projeto e substitua o texto acima pelo nome do arquivo de imagem.)*

---

### 💻 Tecnologias Utilizadas

* **HTML5** (Estruturação semântica do conteúdo)
* **CSS3** (Estilização e layout com Flexbox)
* **JavaScript (ES6+)** (Lógica da aplicação, interatividade e manipulação de dados)

---

### 🧠 Conceitos Aplicados e Aprendizados

Este projeto foi fundamental para praticar os pilares do desenvolvimento front-end com JavaScript puro:

* **Manipulação do DOM:** Criação, adição e remoção de elementos HTML de forma dinâmica com `createElement`, `appendChild` e `remove`.
* **Event Handling:** Captura de eventos do usuário como `submit` de formulários e `click` em elementos da lista.
* **Delegação de Eventos (Event Delegation):** Uso de um único `event listener` no elemento pai (`<ul>`) para gerenciar eventos em todos os seus filhos (`<li>`) de forma eficiente, otimizando a performance.
* **Gerenciamento de Estado:** Utilização de um array JavaScript como a "fonte única da verdade" para os dados da aplicação, e uma função de renderização para refletir o estado atual na tela.
* **Persistência de Dados no Navegador:** Uso do `localStorage` para salvar o estado da aplicação e proporcionar uma experiência contínua para o usuário.
* **Manipulação de JSON:** Conversão de objetos e arrays JavaScript para strings JSON com `JSON.stringify()` e o processo inverso com `JSON.parse()` para permitir o armazenamento no `localStorage`.
* **Métodos de Array Essenciais:** Uso prático de `.push()`, `.findIndex()` (ou lógica para encontrar o índice), `.splice()` e `.forEach()` para manipular o estado da lista de tarefas.

---

### ▶️ Como Executar Localmente

```bash
# 1. Clone este repositório
$ git clone URL_DO_SEU_REPOSITORIO_AQUI

# 2. Navegue até o diretório do projeto
$ cd nome-da-pasta-do-projeto

# 3. Abra o arquivo index.html no seu navegador de preferência
