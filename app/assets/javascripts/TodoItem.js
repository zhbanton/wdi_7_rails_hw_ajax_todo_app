TodoItem = function(todoItem) {
  this.name = todoItem.name;
  this.id = todoItem.id;
  this.createdAt = todoItem.created_at;
  this.completedAt = todoItem.updated_at;
};

TodoItem.prototype = {
  toHtml: function() {
  todo = $('<tr>').addClass('unfinished-item').data('id', this.id).append($('<td>').text(this.name));
  if (this.createdAt === this.completedAt) {
    todo.append($('<td>').addClass('todo-time').text(this.createdAt));
  }
  else {
    todo.append($('<td>').addClass('todo-time').text(this.completedAt));
  }
  todo.append(this.completeButton()).append(this.deleteButton());
  return todo;
  },
  completeButton: function() {
    return $('<td>').append($('<a>')).text('complete').addClass('btn btn-default complete-btn');
  },
  deleteButton: function() {
    return $('<td>').append($('<a>')).text('delete').addClass('btn btn-default delete-btn');
  }
};

