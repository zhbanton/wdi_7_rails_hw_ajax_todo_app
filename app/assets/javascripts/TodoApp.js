TodoApp = {
  url: 'http://localhost:3000/todo_items/',
  init: function() {
    this.getTodoItems();
    $('#item-submit').click($.proxy(this.createTodoItem, this));
    $('body').on('click', '.complete-btn', $.proxy(this.completeTodoItem, this));
    $('body').on('click', '.delete-btn', $.proxy(this.deleteTodoItem, this));
  },
  getTodoItems: function() {
    $.ajax({
      url: this.url,
    })
    .done($.proxy(this.todosCallback, this));
  },
  todosCallback: function(todoItems) {
    var unfinishedCount = 0;
    var finishedCount = 0;
    $('#unfinished-items .unfinished-item').empty();
    $('#finished-items .finished-item').empty();
    todoItems.forEach(function(todo) {
      newTodo = new TodoItem(todo).toHtml();
      if (newTodo.hasClass('unfinished-item')) {
        $('#unfinished-items').append(newTodo);
        unfinishedCount += 1;
      }
      else {
        $('#finished-items').append(newTodo);
        finishedCount += 1;
      }
    });
    $('#unfinished-count').text(unfinishedCount);
    $('#finished-count').text(finishedCount);
  },
  createTodoItem: function(event) {
    var requestObj = {todo_item: {name: $('#item-text').val(), is_finished: false}};
    if (/\S/.test($('#item-text').val())) {
      $.ajax({
        type: "POST",
        url: this.url,
        data: requestObj,
        dataType: 'json'
      })
      .done(this.getTodoItems());
    }
    $('#item-text').val('');
    event.preventDefault();
  },
  completeTodoItem: function(event) {
    var requestObj = {todo_item: {is_finished: true}};
    var id = $(event.currentTarget).parent().data('id');
    $.ajax ({
      type: "PATCH",
      url: this.url + id,
      data: requestObj,
      dataType: 'json'
    })
    .done(this.getTodoItems());
  },
  deleteTodoItem: function(event) {
    var id = $(event.currentTarget).parent().data('id');
    $.ajax ({
      type: "DELETE",
      url: this.url + id
    })
    .done(this.getTodoItems());
  }
};
