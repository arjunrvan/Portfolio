// Define variables
var newListHolder = document.getElementById('newlist-holder');
var compListHolder = document.getElementById('complist-holder');
var taskInput = document.getElementById('myInput');

// Add task function 
function addTask () {

    // If input field is not empty, proceed
    if (taskInput.value) {
        var taskList = document.createElement('div');
        var taskTitle = document.createElement('h3');
        taskTitle.innerHTML = taskInput.value;

        var editBtn = document.createElement('button');
        editBtn.innerHTML = "Edit";

        var taskBtn = document.createElement('button');
        taskBtn.innerHTML = "Done";

        editBtn.classList.add('task-btn');
        taskBtn.classList.add('task-btn');
        
        taskList.classList.add('task-list');

        editBtn.onclick = taskEdit;
        taskBtn.onclick = taskCheck;

        taskList.append(taskTitle);
        taskList.append(editBtn);
        taskList.append(taskBtn);
        
        newListHolder.append(taskList);

        taskInput.value = "";
    }
}

// Function to move div from current task to completed tasks
function taskCheck () {
    var delBtn = document.createElement('button');
    var resBtn = document.createElement('button');
    

    delBtn.innerHTML = "Delete";
    resBtn.innerHTML = "Restore";

    delBtn.classList.add('del-btn');
    resBtn.classList.add('res-btn');

    var parentDiv = this.parentNode;
    parentDiv.remove();

    delBtn.onclick = taskDel;
    resBtn.onclick = taskRes;
    parentDiv.append(resBtn);
    parentDiv.append(delBtn);
    

    parentDiv.querySelector('h3').style.textDecoration = 'line-through';

    compListHolder.append(parentDiv);
    this.remove();
    parentDiv.querySelectorAll('button')[0].remove();

}

// function to remove task completely
function taskDel () {
    var parentDiv = this.parentNode;
    parentDiv.remove();
}

// function to restore task from completed to current
function taskRes () {
    var parentDiv = this.parentNode;
    parentDiv.remove();
    var editBtn = document.createElement('button');
    editBtn.innerHTML = "Edit";

    var taskBtn = document.createElement('button');
    taskBtn.innerHTML = "Done";

    editBtn.classList.add('task-btn');
    taskBtn.classList.add('task-btn');

    editBtn.onclick = taskEdit;
    taskBtn.onclick = taskCheck;

    parentDiv.append(editBtn);
    parentDiv.append(taskBtn);
        
    newListHolder.append(parentDiv);
    this.remove();
    parentDiv.querySelectorAll('button')[0].remove();

    parentDiv.querySelector('h3').style.textDecoration = 'none';
}

var timing;
var doneTypingInterval = 2000;

// function to edit task (change h3 field to input, wait 2s after last keyup, the change back to h3)
function taskEdit () {
    var parentDiv = this.parentNode;

    var editInput = document.createElement('input');
    editInput.placeholder =  parentDiv.querySelector('h3').innerHTML;

    editInput.classList.add('edit-input');

    parentDiv.querySelector('h3').remove();

    parentDiv.prepend(editInput);

    // on keydown, cleartimeout
    editInput.addEventListener('keydown',function () {
        clearTimeout(timing);
    })

    // on keyup, clear timeout and set timeout
    editInput.addEventListener('keyup',function () {

        clearTimeout(timing);

        timing = setTimeout(function () { 
            var taskTitle = document.createElement('h3');

            taskTitle.innerHTML = parentDiv.querySelector('input').value;
        
            parentDiv.querySelector('input').remove();
        
            parentDiv.prepend(taskTitle); 

        },doneTypingInterval);
    })

}



