class TodoItem < ActiveRecord::Base
  validates :name, presence: true
end
