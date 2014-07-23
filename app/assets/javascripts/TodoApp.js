TodoApp = {
  url: 'http://localhost:3000/todo_items/',
  init: function() {
    this.getTodoItems();
    $('#item-submit').click($.proxy(this.createTodoItem, this));
    // $('body').on('click', '.complete-btn', $.proxy(this.completeItem, this));
    $('body').on('click', '.delete-btn', $.proxy(this.deleteTodoItem, this));
  },
  getTodoItems: function() {
    $.ajax({
      url: this.url,
    })
    .done(this.todosCallback);
  },
  todosCallback: function(todoItems) {
    $('#unfinished-items').empty();
    todoItems.forEach(function(todo) {
      newTodo = new TodoItem(todo);
      $('#unfinished-items').append(newTodo.toHtml());
    });
  },
  createTodoItem: function(event) {
    var requestObj = {todo_item: {name: $('#item-text').val()}};
    if (/\S/.test($('#item-text').val())) {
      $.ajax({
        type: "POST",
        url: this.url,
        data: requestObj,
        dataType: 'json'
      })
      .done(this.addTodoItem);
    }
    $('#item-text').val('');
    event.preventDefault();
  },
  addTodoItem: function(todoItem){
    var newTodo = new TodoItem(todoItem);
    $('#unfinished-items').append(newTodo.toHtml());
  },
  deleteTodoItem: function(event) {
    var id = $(event.currentTarget).parent().data('id');
    $.ajax ({
      type: "DELETE",
      url: this.url + id,
    }).done(this.getTodoItems());
  }
};
