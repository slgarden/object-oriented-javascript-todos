// Initialize an empty TODO list list = newTodoList();
// Add a task to a TODO list list.add("walk the dog");
// Get all the tasks on a TODO list  tasks = list.tasks();
// Remove a particular task from a TODO list ???
// Complete a particular task on a TODO list ???
// Parse the command-line arguments and take the appropriate action  ???


var newTodoList = function() {
  return {
    list: [],
    add: add,
    tasks: tasks,
    remove: remove,
    complete: complete
  };

};

var add = function(description) {
  this.list.push({id: (this.list.length === 0 ? 1 : this.list[this.list.length-1].id + 1), description:description, complete: false});
};

var tasks = function() {
  var output = "";
  for(i=0; i<this.list.length; i++){
      console.log(this.list[i].id + ". " + (this.list[i].complete ? "[X]" : "[ ]") + " " + this.list[i].description);
      output = output +  this.list[i].id + ". " + (this.list[i].complete ? "[X]" : "[ ]") + " " + this.list[i].description + "<button id='"+ this.list[i].id + "' class='remove'>Remove</button> <button id='"+ this.list[i].id + "' class='complete'>Complete</button>"+"<br>";
  };
  return output;
};

var remove = function(id) {
  for(i=0; i<this.list.length; i++){
    if(id == this.list[i].id){
      this.list.splice(i, 1);
    };
  };
};

var complete = function(id) {
  for(i=0; i<this.list.length; i++){
    if(id == this.list[i].id){
      this.list[i].complete = (this.list[i].complete ?  false : true);
    };
  };
};

// Driver code

var todoList = newTodoList();
todoList.add("Go get lunch");
todoList.add("Go to park");
todoList.add("Go buy groceries");


// JQuery

$( document ).ready(function(){
  $(".todo-list").html(todoList.tasks());

  $(".add").click(function(){
    todoList.add($("input").val());
    $(".todo-list").html(todoList.tasks());
  });

  $(document).delegate('.remove', 'click', function(){
    console.log(this.id);
    todoList.remove(this.id);
    $(".todo-list").html(todoList.tasks());
  });

  $(document).delegate('.complete', 'click', (function(){
    console.log(this.id);
    todoList.complete(this.id);
    $(".todo-list").html(todoList.tasks());
  }));

});


