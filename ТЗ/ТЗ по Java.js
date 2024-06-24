document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Функция для загрузки задач с сервера (заглушка)
    function loadTasks() {
        // Здесь должен быть код для загрузки задач с вашего API
        // Пример заглушки:
        const tasks = [
            { id: 1, title: 'Сделать домашнее задание' },
            { id: 2, title: 'Приготовить ужин' },
            { id: 3, title: 'Позвонить маме' }
        ];

        tasks.forEach(task => addTaskToList(task));
    }

    // Функция для добавления задачи в список
    function addTaskToList(task) {
        const li = document.createElement('li');
        li.innerHTML = <span>${task.title}</span><button data-id="${task.id}">Удалить</button>;
        taskList.appendChild(li);
    }

    // Загрузить задачи при загрузке страницы
    loadTasks();

    // Обработчик отправки формы
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskTitle = taskInput.value.trim();

        if (taskTitle !== '') {
            const newTask = { title: taskTitle };

            // Отправка новой задачи на сервер (заглушка)
            // Здесь должен быть код для отправки на ваше API
            // После успешной отправки добавляем задачу в список
            addTaskToList(newTask);

            // Очистить поле ввода
            taskInput.value = '';
        }
    });

    // Обработчик удаления задачи
    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const taskId = event.target.getAttribute('data-id');

            // Удаление задачи с сервера (заглушка)
            // Здесь должен быть код для удаления задачи по taskId с вашего API
            // После успешного удаления удаляем задачу из списка на странице
            event.target.parentElement.remove();
        }
    });
});