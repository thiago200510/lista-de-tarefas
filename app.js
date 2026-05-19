// app.js – Lógica principal da Lista de Tarefas

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateCount() {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  if (total === 0) {
    taskCount.textContent = 'Nenhuma tarefa cadastrada.';
  } else {
    taskCount.textContent = `${done} de ${total} tarefa(s) concluída(s).`;
  }
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.done) li.classList.add('done');

    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = task.text;
    span.addEventListener('click', () => toggleTask(index));

    const btn = document.createElement('button');
    btn.classList.add('delete-btn');
    btn.textContent = '✕';
    btn.title = 'Remover tarefa';
    btn.addEventListener('click', () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(btn);
    taskList.appendChild(li);
  });
  updateCount();
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ text, done: false });
  saveTasks();
  renderTasks();
  taskInput.value = '';
  taskInput.focus();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

// Botão Limpar Concluídas
const clearDoneBtn = document.getElementById('clearDoneBtn');

function updateClearBtn() {
  const hasDone = tasks.some(t => t.done);
  clearDoneBtn.style.display = hasDone ? 'block' : 'none';
}

clearDoneBtn.addEventListener('click', () => {
  tasks = tasks.filter(t => !t.done);
  saveTasks();
  renderTasks();
  updateClearBtn();
});

// Sobrescreve renderTasks para também atualizar o botão
const _originalRender = renderTasks;
function renderTasks() {
  _originalRender();
  updateClearBtn();
}

// Inicializa a renderização
renderTasks();
updateClearBtn();
