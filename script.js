// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => { 

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the list item
        taskItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
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
    document.addEventListener('DOMContentLoaded', addTask);

});