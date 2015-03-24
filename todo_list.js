var Task = function(TodoList) {
  this.completed = false;
  this.todoList = TodoList;
};

Task.prototype.complete = function() {
  this.completed = (this.completed ? false : true);
};

Task.prototype.remove = function() {
  var index = this.todoList.tasks.indexOf(this);
  this.todoList.tasks.splice(index,1);
};

var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype.add = function(description) {
  var newTask = new Task(this);
  newTask.id = this.tasks.length === 0 ? 1 : this.tasks[this.tasks.length-1].id + 1;
  newTask.description = description;
  this.tasks.push(newTask);
};

TodoList.prototype.list = function() {
  for(i=0; i<this.tasks.length; i++){
    console.log(this.tasks[i].id + ". " + (this.tasks[i].completed ? "[X]" : "[ ]") + " " + this.tasks[i].description);
  };
};


// Driver code


var groceryList = new TodoList();
