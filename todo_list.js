var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype = {
  list: function(){
    count = 0;
    while (count < this.tasks.length){
      console.log(this.tasks[count])
      count += 1;
    }
  },

  add: function(listItem){
    this.tasks.push(new Task(this, listItem));
  }
};

var Task = function(toDoList, description){
  this.toDoList = toDoList;
  this.id = Task.counter++;
  this.description = description;
  this.completed = false;
}

Task.counter = 1;

Task.prototype = {
  complete: function(){
    this.completed = true;
  },

  remove: function(){
    var index = this.toDoList.tasks.indexOf(this);
    this.toDoList.tasks.splice(index,1);
  }

};

var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
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

//silly
