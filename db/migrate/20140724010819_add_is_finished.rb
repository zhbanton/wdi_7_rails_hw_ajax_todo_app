class AddIsFinished < ActiveRecord::Migration
  def change
    add_column :todo_items, :is_finished, :boolean
  end
end
