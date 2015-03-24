var TodoList = function() {
	this.tasks = [];
  this.id = 0;
};

TodoList.prototype.list = function() {
  for (var i = 0; i <= this.tasks.length; i++) {
    console.log(this.tasks[i]);
  };
};

TodoList.prototype.add = function(task){
  this.id++;
  task.id = this.id;
  this.tasks.push(task);
  return this.tasks;
};

TodoList.prototype.remove = function(task){
  for (var i = 0; i <= this.tasks.length; i++) {
    if (this.tasks[i] === task) {
      this.tasks.splice(i, 1);
    };
  };
  return this.tasks;
};

TodoList.prototype.complete = function(task) {
  task.complete();
};

var Task = function(description, todolist) {
  this.id = null;
  this.description = description;
  this.completed = false;
  this.todolist = todolist;
};

Task.prototype.complete = function(){
  this.completed = true;
};

Task.prototype.remove = function() {
  this.todolist.remove(this);
}

// Driver code


var list1 = new TodoList;
var task1 = new Task('go to the store', list1);
var task2 = new Task('eat', list1);
console.log(list1.add(task1));
console.log(list1.add(task2));
console.log(list1.tasks);




