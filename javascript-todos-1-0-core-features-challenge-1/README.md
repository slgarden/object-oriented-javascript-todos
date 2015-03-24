# JavaScript Todos 1.0 Core Features 
 
## Learning Competencies 

* Create well-defined javascript object with a single responsibility
* Identify and implement object based on real world requirements
* Implement clean and flexible interfaces between objects

## Summary 

 This is the first of several iterations towards building a single-user command-line TODO application in JavaScript.  Each iteration will involve adding new commands and features.

From the user's perspective, we want to build something that works like this:

```js
todo_list = newTodoList();
todo_list.add('Bake a delicious blueberry-glazed cheesecake');
todo_list.list();
todo_list.remove(task_id);
todo_list.complete(task_id);
```

There will be no text file in this version of this challenge. The todo list items will be saved in memory. So when you reload your page the list will be reset.


##Releases

###Release 0 : Enumerate the responsibilities

Start by enumerating the responsibilities of your TODO application.  These aren't just the user-facing commands like "add", "remove", etc.  

Each responsibility should map to a concrete unit of JavaScript code.  For example,

Responsibility                                                                     | Code World
-----------------------------------------------------------------------------------|------------------------------------
Initialize an empty TODO list                                                      | `list = newTodoList();`
Add a task to a TODO list                                                          | `list.add("walk the dog");`
Get all the tasks on a TODO list                                                   | `tasks = list.tasks();`
Remove a particular task from a TODO list                                          | `???`
Complete a particular task on a TODO list                                          | `???`
Parse the command-line arguments and take the appropriate action                   | `???`
Parse the `todo.csv` file and wrap each entry in easier-to-manipulate Ruby objects | `???`


There are other responsibilities.  What are they?

### Release 1 : Translate to Code

Once you have a solid list of responsibilities you can start translating each into code.

####Implement the list command

When you run

Terminal:
```sh
$ open todo_list.html
```

Javascript developer tools console
```js
todo_list = newTodoList();
todo_list.add('Bake a delicious blueberry-glazed cheesecake');
todo_list.tasks();
> [task, task, task]
todo_list.list();
> 1. Bake a delicious blueberry-glazed cheesecake
> 2. Write up that memo and fax it out
> 3. Conquer the world
```

#### Implement the add command

Requirements:

- A user can add (append) a task to their TODO list

It should work like this

```js
todo_list.add('buy more arugala');
```

#### Implement the remove command

Requirements:

- A user can remove a specific task from their TODO list

It should work like this

```js
todo_list.add('buy more arugala');
var task = todo_list.tasks()[0];
todo_list.remove(task);
```

#### Implement completeness

Requirements:

- A user can complete a specific task from their TODO list
- A completed TODO task will be identified as such when a user uses the `list` command


### Release 2 : Render your todo list in the DOM

If you finish release 1 before lunch, do release 2, otherwise move onto the JavaScript racer

- Using jQuery, render your todo list in the DOM
- Add a form to add a new todo list item
- Add buttons for add, complete and remove for each task

