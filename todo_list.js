var TodoList = function() {
	this.tasks = [];
};

TodoList.prototype.list = function() {
  for (i = 0; i <= this.tasks.length; i++) {
    console.log(this.tasks[i]);
  };
};

TodoList.prototype.add = function(task){
  this.tasks.push(task);
  return this.tasks;
};

TodoList.prototype.remove = function(task){
  for (i = 0; i <= this.tasks.length; i++) {
    if (this.tasks[i] === task) {
      delete this.tasks[i];
    };
  };
  return this.tasks;
};

TodoList.prototype.complete = function(task) {
  task.complete();
};

var Task = function(description, id) {
  this.description = description;
  this.completed = false;
  this.id = id;
};

Task.prototype.complete = function(){
  this.completed = true;
};

// Driver code


var list1 = new TodoList;
var task1 = new Task('go to the store', '1');
var task2 = new Task('eat', '2');
console.log(list1.add(task1));
console.log(list1.add(task2));
console.log(list1.tasks);




