
var Task = function(todoList, taskArgument) {
  this.id = Task._LAST_TASK_ID++;
  this.description = taskArgument;
  this.completed = false;
  this.todoList = todoList;
};

Task._LAST_TASK_ID = 0;

Task.prototype.complete =  function(){
  this.completed = true;
};

var TodoList = function() {
  this.tasks = [];
};


TodoList.prototype.add = function(task){
  this.tasks.push(new Task(this, task));
};

TodoList.prototype.list = function(){
  for (var i=0; i < this.tasks.length; i++){
    console.log(this.tasks[i]);
  }
};

TodoList.prototype.remove = function (task){
  var index = this.tasks.indexOf(task);
  this.tasks.splice(index, 1);
};

// NEED TO COME BACK TO THIS WITH HELP :)
// Task.prototype.remove = function(){
//   debugger
//   var index = TodoList.tasks.indexOf(this);
//   TodoList.tasks.splice(index, 1);
//   // TodoList.tasks.splice(this.id, 1);
// };

Task.prototype.remove = function(){
  this.todoList.remove(this);
};

// Driver code
// Note we are using a JavaScript constructor now.

var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
// > Task {id: 1, description: 'bread', completed: false}
// > Task {id: 2, description: 'cheese', completed: false}
// > Task {id: 3, description: 'milk', completed: false}


// // getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

