class TodoItemsController < ApplicationController

  respond_to :json

  def index
    @todo_items = TodoItem.all
  end

  def show
    @todo_item = TodoItem.find(params[:id])
  end

  def create
    @todo_item = TodoItem.new(todo_item_params)
    if @todo_item.save
      respond_with(@todo_item)
    else
      respond_with(@todo_item.errors)
    end
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:name)
  end

end

