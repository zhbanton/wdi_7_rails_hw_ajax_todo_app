TodoApp = {
  init: function() {
    this.getTodoItems();
    $('#item-submit').click($.proxy(this.createTodoItem, this));
    // $('body').on('click', '.complete-btn', $.proxy(this.completeItem, this));
    $('body').on('click', '.delete-btn', $.proxy(this.deleteTodoItem, this));
  },
  getTodoItems: function() {
    $.ajax({
      url: 'http://localhost:3000/todo_items'
    })
    .done(this.todosCallback);
  },
  todosCallback: function(todoItems) {
    todoItems.forEach(function(todo) {
      newTodo = new TodoItem(todo.name);
      $('#unfinished-items').append(newTodo.toHtml());
    });
  },
  createTodoItem: function(event) {
    var requestObj = {todo_item: {name: $('#item-text').val()}};
    if (/\S/.test($('#item-text').val())) {
      $.ajax({
        type: "POST",
        url: 'http://localhost:3000/todo_items',
        data: requestObj,
        dataType: 'json'
      })
      .done(this.addTodoItem);
    }
    $('#item-text').val('');
    event.preventDefault();
  },
  addTodoItem: function(todoItem){
    var newTodo = new TodoItem(todoItem.name);
    $('#unfinished-items').append(newTodo.toHtml());
  },
  deleteTodoItem: function(event) {
    console.log(this);
    console.log($(this))
    event.preventDefault();
  }

};
