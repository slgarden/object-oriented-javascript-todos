var TodoList = function() {
	// this
  this.tasks = [];
  counter = 0;
  this.add = function(task){
    newtask = Object.create(taskPrototype);
    newtask.description = task;
    counter ++;
    newtask.id = counter;
    this.tasks.push(newtask);
  };
  this.list = function(){
    for(task in this.tasks){
      if (this.tasks[task].deleted === false) {
      console.log(this.tasks[task])}
    }
  };
};

// newTodoList.prototype.add = function(task){
//   this.tasks.push(task);
// };

var taskPrototype = {
  id: null,
  description: null,
  completed: false,
  complete: function(){
    this.completed = true;
  },
  deleted: false,
  remove: function(){
    this.deleted = true;
  }
}

// Driver code


// var todoList = newTodoList();

// // Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// // tasks is now an array of Task objects
// groceryList.tasks //-> [Task, Task, Task]

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: false}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // getting a task object
var breadTask = groceryList.tasks[0];

// breadTask.id //-> 1 (some unique numerical ID)
// breadTask.description //-> 'bread'
// breadTask.completed //-> false


// // This should complete the task
// breadTask.complete();

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: true}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // This should remove the task from the todo list
// breadTask.remove();

// groceryList.list();
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}
