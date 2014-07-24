class TodoItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :updated_at, :is_finished
end
