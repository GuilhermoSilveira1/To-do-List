let todoInput = window.document.getElementById("todo-input");
let button = window.document.getElementById("adicionar");
let ul = window.document.getElementById("todo-list");

button.addEventListener("click", addTask);

function addTask(event) {
    event.preventDefault(); // Impede que o formulário recarregue a página, mantendo a lista
    let taskText = todoInput.value.trim(); // Usar o trim() retira espaços em branco do começo e final da string

    if (taskText !== '') {
        // Criar uma caixinha ao lado da tarefa, para marcar a tarefa como concluída
        let newBoxItem = window.document.createElement("button");
        newBoxItem.classList.add("btn");

        // Chama a função tarefa completa quando o botão é clicado
        newBoxItem.addEventListener("click", taskCompleted);

        // Criar um novo elemento de lista para cada nova tarefa
        let newTaskItem = window.document.createElement("li");
        newTaskItem.classList.add("task");

        // Adicionar o botão ao lado esquerdo da tarefa
        newTaskItem.appendChild(newBoxItem);

        // Adicionar o texto da tarefa como um nó de texto dentro do elemento <li>
        newTaskItem.appendChild(window.document.createTextNode(taskText));

        // Adicionar a nova tarefa à lista
        ul.appendChild(newTaskItem);

        // Limpar o campo de entrada após adicionar a tarefa
        todoInput.value = '';
    }
}

function taskCompleted(event) {
    // Navegar até o elemento li (pai do botão) e adicionar a classe completed ao texto dentro desse elemento
    event.target.parentNode.classList.toggle("completed"); // Adiciona ou remove a classe completed do pai do botão
}
