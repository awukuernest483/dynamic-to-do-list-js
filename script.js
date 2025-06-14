// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {   

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indi
    }
    // Function to add a new task to the list
    function addTask(taskText, save = true) {
        const taskText = taskInput.value.trim();


        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }



        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    // Add event listener to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to input for Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded
    document.addEventListener('DOMContentLoaded',loadTasks, addTask);

});