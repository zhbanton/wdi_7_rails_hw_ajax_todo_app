TodoItem = function(name) {
  this.name = name;
};

TodoItem.prototype = {
  toHtml: function() {
    return $('<tr>').addClass('unfinished-item').append($('<td>').text(this.name))
      .append(this.completeButton()).append(this.deleteButton());
  },
  completeButton: function() {
    return $('<td>').append($('<a>')).text('complete').addClass('btn btn-default complete-btn');
  },
  deleteButton: function() {
    return $('<td>').append($('<a>')).text('delete').addClass('btn btn-default delete-btn');
  },
};
