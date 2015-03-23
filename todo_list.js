var Task = function(todoList, description){
  this.todoList = todoList;
  this.id = Task.counter++;
  this.description = description;
  this.completed = false;
};

Task.counter = 0;

Task.prototype.complete = function(){
  this.completed = true;
};

Task.prototype.remove = function(){
  this.todoList.remove(this);
};



var TodoList = function(){
  this.tasks = [];
};


// groceryList.add('bread');
TodoList.prototype.add = function(description){
  var task = new Task(this, description)
  this.tasks.push(task);
};

// groceryList.remove(Task);
TodoList.prototype.remove = function(task){
  var index = this.tasks.indexOf(task);
  this.tasks.splice(index, 1);
};

TodoList.prototype.list = function(){
  for (var i = 0; i < this.tasks.length; i++){
    console.log(this.tasks[i].id + ": " + this.tasks[i].description + " completed: " + this.tasks[i].completed);
  };
};


var groceryList = new TodoList();
// var bread = Object.create(task)
// bread.description = "bread"
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
// groceryList.list();

var breadTask = groceryList.tasks[0];
console.log(breadTask.description);
console.log(breadTask.completed);
breadTask.complete();
// groceryList.list();
//
breadTask.remove();
// groceryList.remove(breadTask);
groceryList.list();





